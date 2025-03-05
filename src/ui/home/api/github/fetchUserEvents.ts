import { axios } from "@libs/fetcher";
import type { GithubEvent } from "@ui/home/api/github/types/UserEvents.type";
import type { RepoCommit } from "@ui/home/api/github/types/RepoCommits.type";
import type { Repository } from "@ui/home/api/github/types/Repository.type";

export const GH_USER                = "RDCodev";
export const GH_URL                 = "https://api.github.com";

export const GH_USER_EVENTS         = (user: string) => `${GH_URL}/users/${user}/events/public`;
export const GH_COMMITS_HISTORY     = (repo: string) => `${GH_URL}/repos/${repo}/commits`;
export const GH_REPO_INFO           = (repo: string) => `${GH_URL}/repos/${repo}`;

export const GH_HEADERS             = { "X-GitHub-Api-Version": "2022-11-28" };
export const GH_PARAMS              = { per_page: 5, page: 1 };

export async function fetchUserEvents() {

  const { data: events } = await axios.request<GithubEvent[]>(
    {
      url: GH_USER_EVENTS(GH_USER),
      params: GH_PARAMS,
      headers: GH_HEADERS
    }
  );

  return { events }
}

export async function fetchRepoCommits(repo: string) {
  const { data: commits } = await axios.request<RepoCommit[]>({
    url: GH_COMMITS_HISTORY(repo),
    params: GH_PARAMS,
    headers: GH_HEADERS
  })

  return { commits }
}

export async function fetchRepoInfo(repo: string) {
  const { data: info } = await axios.request<Repository>({
    url: GH_REPO_INFO(repo),
    headers: GH_HEADERS
  })

  return { info }
}