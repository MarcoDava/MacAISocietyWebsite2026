export interface GitHubProject {
  id: string;
  name: string;
  description: string;
  language: string;
  topics: string[];
  stars: number;
  forks: number;
  year: number;
  updatedAt: string;
  url: string;
  homepage: string | null;
  org?: string | null;
  image?: string | null;
  isArchived: boolean;
  isFork: boolean;
}

export interface GitHubProjectsPayload {
  syncedAt: string;
  orgs: string[];
  count: number;
  projects: GitHubProject[];
}
