import { GH_USER, githubUserEvents } from "@constant/github.constant";
import { fetcher } from "@libs/fetcher";
import type { GithubEvent } from "@models/github.models";
import useSWR from "swr";

export function useUserEvents() {
  const { data, error } = useSWR<GithubEvent[]>(githubUserEvents(GH_USER), fetcher);

  return { events: data, error };
}