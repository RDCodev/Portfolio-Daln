export interface GithubEvent {
  id:         string;
  type:       string;
  actor:      GithubActor;
  repo:       GithubRepo;
  payload:    GithubPayload;
  public:     boolean;
  created_at: string;
}

export interface GithubActor {
  id:            number;
  login:         string;
  display_login: string;
  gravatar_id:   string;
  url:           string;
  avatar_url:    string;
}

export interface GithubPayload {
  repository_id: number;
  push_id:       number;
  size:          number;
  distinct_size: number;
  ref:           string;
  head:          string;
  before:        string;
  commits:       GithubCommit[];
}

export interface GithubCommit {
  sha:      string;
  author:   GithubAuthor;
  message:  string;
  distinct: boolean;
  url:      string;
}

export interface GithubAuthor {
  email: string;
  name:  string;
}

export interface GithubRepo {
  id:   number;
  name: string;
  url:  string;
}
