import axios from "axios";
import { GH_USER, ghUserEvents } from "@constant/github.constant";
import type { GithubEvent } from "@models/github.models";

export async function fetchUserEvents() {

  const { data: events } = await axios.request<GithubEvent[]>(
    {
      url: ghUserEvents(GH_USER),
      params: { per_page: 5, page: 1 },
      headers: { "X-GitHub-Api-Version": "2022-11-28" }
    }
  );

  return { events }
}

export function fetchRepoInformation(id: string) {

}

export function fetchCommitsHistory(id: string) {

}