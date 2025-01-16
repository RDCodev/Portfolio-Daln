export const GH_USER              = "RDCodev";
export const GH_URL               = "https://api.github.com";

export const ghUserEvents         = (user: string)                  => `${GH_URL}/users/${user}/events/public`;
export const ghCommitsHistory     = (user: string, repo: string)    => `${GH_URL}/repos/${user}/${repo}/commits`;