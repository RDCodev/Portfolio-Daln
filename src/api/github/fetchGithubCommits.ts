import { fetchUserEvents, fetchRepoInfo } from "@api/github/UserEvents";
import { JSONPath } from "jsonpath-plus";
import type { Repository } from "@api/types/Repository.type";
import type { GithubCommit, GithubEvent } from "@api/types/UserEvents.type";

type Commit = Omit<GithubEvent, "payload"> & { commit: GithubCommit }

export default async function fetchGithubCommits() {

  const commitEventsPath  = "$..[?(@.type==='PushEvent')]";
  const reposNamePath     = "$..repo.name";

  let repos   : Record<string, Repository>  = {};
  let commits : Commit[]                    = [];

  const { events } = await fetchUserEvents();

  const commitsEvents = JSONPath<typeof events>({
    path: commitEventsPath, json: events,
  });

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
