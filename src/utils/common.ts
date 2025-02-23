export interface RepositoryTitle { 
  scope: string
  title: string
}

export function parseTitle(title: string, identifier: string): RepositoryTitle | null {
  
  if (!title || !identifier) return null;

  let [scope, ...name] = title.split(identifier);
  
  return { scope, title: name.join(" ") }
}

export type NameMode = "short";

export interface NameProps {
  firstName: string;
  lastName?: string;
  middleName?: string;
  motherName?: string;
  suffix?: string;
  prefix?: string;
}

export function parseName(_name: NameProps, mode: NameMode = "short") {

  const { firstName, lastName } = _name;

  let name = "";

  switch (mode) {
    case "short":
      name = `${ firstName } ${ lastName }`; break;
  }

  return name.trim();
}