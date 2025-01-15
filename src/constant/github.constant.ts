export const GH_BASE_URL          = "https://api.github.com";
export const GH_USER              = "RDCodev";

export const githubUserEvents   = (user: string) => `${GH_BASE_URL}/users/${user}/events/public`;