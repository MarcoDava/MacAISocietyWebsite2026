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
  isArchived: boolean;
  isFork: boolean;
  image?: string;
}

export interface GitHubProjectsPayload {
  syncedAt: string;
  org: string;
  count: number;
  projects: GitHubProject[];
}
