import { fetchUserEvents, fetchRepoInfo } from "@ui/home/api/github/fetchUserEvents";
import { JSONPath } from "jsonpath-plus";
import type { Repository } from "@ui/home/api/github/types/Repository.type";
import type { GithubCommit, GithubEvent } from "@ui/home/api/github/types/UserEvents.type";

export type FetchedCommit = Omit<GithubEvent, "payload"> & { commit: GithubCommit }

export default async function fetchGithubCommits() {

  const repos: Record<string, Repository> = {};

  const { events } = await fetchUserEvents();

  const commitsEvents = events.filter(({ type }) => type === "PushEvent");
  const reposToFetch = [
    ...new Set(
      JSONPath<string[]>({
        path: "$..repo.name", json: commitsEvents,
      })
    ),
  ].map((repo) => fetchRepoInfo(repo))

  const uniqueRepos = await Promise.all(reposToFetch);

  for (const { info: repo } of uniqueRepos) {
    repos[repo.full_name] = repo;
  }

  const commits = commitsEvents
    .flatMap(({ payload: { commits }, ...rest }) => commits
      .filter(() => repos[rest.repo.name]!)
      .map((commit) => ({ ...rest, commit }))
    ) as FetchedCommit[];

  return { repos, commits };
}
