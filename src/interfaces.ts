export interface Owner {
  avatar_url: string;
  events_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  gravatar_id: string;
  html_url: string;
  id: number;
  login: string;
  node_id: string;
  organizations_url: string;
  received_events_url: string;
  repos_url: string;
  site_admin: boolean;
  starred_url: string;
  subscriptions_url: string;
  type: string;
  url: string;
}

export interface RepoResponse {
  id: string;
  name: string;
  full_name: string;
  description: string;
  html_url: string;
  open_issues_count: number;
  issues_url: string;
  owner: Owner;
}

export interface IssuesResponse {
  id: string;
  user: Owner;
  title: string;
  body: string;
  created_at: Date;
  updated_at: Date;
}
