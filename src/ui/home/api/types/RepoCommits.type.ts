import type { Repository } from "./Repository.type";

export interface RepoCommit {
  sha:          string;
  node_id:      string;
  commit:       Commit;
  url:          string;
  html_url:     string;
  comments_url: string;
  author:       CommitAuthor;
  committer:    CommitAuthor;
  parents:      Parent[];
  repo?:         Repository;
}

export interface CommitAuthor {
  login:               string;
  id:                  number;
  node_id:             string;
  avatar_url:          string;
  gravatar_id:         string;
  url:                 string;
  html_url:            string;
  followers_url:       string;
  following_url:       string;
  gists_url:           string;
  starred_url:         string;
  subscriptions_url:   string;
  organizations_url:   string;
  repos_url:           string;
  events_url:          string;
  received_events_url: string;
  type:                string;
  user_view_type:      string;
  site_admin:          boolean;
}

export interface Commit {
  author:        Author;
  committer:     Author;
  message:       string;
  tree:          Tree;
  url:           string;
  comment_count: number;
  verification:  Verification;
}

export interface Author {
  name:  string;
  email: string;
  date:  Date;
}

export interface Tree {
  sha: string;
  url: string;
}

export interface Verification {
  verified:    boolean;
  reason:      string;
  signature:   null;
  payload:     null;
  verified_at: null;
}

export interface Parent {
  sha:      string;
  url:      string;
  html_url: string;
}
