import type { RepositoryTitle } from "./types/common.types";

export function parseTitle(_title: string, identifier: string): RepositoryTitle | null {
  
  if (!_title) return null;

  let [scope, title] = _title.split(identifier);

  title = title.replace(/[^a-zA-Z0-9\s]/g, " ")
  
  return { scope, title }
}