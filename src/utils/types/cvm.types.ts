export type ConventionalType = "fix" | "feat" | "break" | "build" | "chore" | "cli" | "style" | "refactor" | "perf" | "test" 

export interface ConventionalCommit {
  type:         ConventionalType
  scope:        string
  description:  string
  body?:        string
  footer?:      string
}