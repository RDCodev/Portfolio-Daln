import { fetchUserEvents, fetchRepoInfo } from "@ui/home/api/github/fetchUserEvents";
import { JSONPath } from "jsonpath-plus";
import type { Repository } from "@ui/home/api/types/Repository.type";
import type { GithubCommit, GithubEvent } from "@ui/home/api/types/UserEvents.type";

export type FetchedCommit = Omit<GithubEvent, "payload"> & { commit: GithubCommit }

export default async function fetchGithubCommits() {

  const reposNamePath = "$..repo.name";

  let repos: Record<string, Repository> = {};
  let commits: FetchedCommit[] = [];

  const { events } = await fetchUserEvents();

  const commitsEvents = events.filter(({ type }) => type === "PushEvent");

  const uniqueRepos = await Promise.all(
    [
      ...new Set(
        JSONPath<string[]>({
          path: reposNamePath, json: events,
        })
      ),
    ].map((repo) => fetchRepoInfo(repo))
  );

  for (const { info: repo } of uniqueRepos) {
    repos[repo.full_name] = repo;
  }

  commits = commitsEvents.flatMap(({ payload: { commits }, ...rest }) => commits
    .filter(() => repos[rest.repo.name]!)
    .map((commit) => ({ ...rest, commit }))
  );

  return { repos, commits };
}
