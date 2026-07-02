export type Gallery = {
  image: string;
  description: string;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  liveDemo: string;
  github: string;
  thumbnail: string;
  featured: boolean;
  category?: string;
  challenges?: string;
  whatILearned?: string;
  video?: string;
  gallery?: Gallery[];
};
