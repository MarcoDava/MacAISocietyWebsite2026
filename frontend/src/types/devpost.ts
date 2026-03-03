export interface DevpostProject {
  id: string;
  name: string;
  tagline: string;
  description: string;
  imageUrl: string | null;
  devpostUrl: string;
  team: string[] | null;
  technologies: string[] | null;
  eventName: string | null;
  createdAt: string | null;
}

export interface DevpostProjectsPayload {
  projects: DevpostProject[];
  lastUpdated: string | null;
}

