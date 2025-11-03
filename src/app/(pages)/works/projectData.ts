export interface ProjectData {
  id: string;
  name: string;
  description: string;
  images: {
    thumbnail: string;
    detail: string;
  };
  technologies?: string[];
  links?: {
    github?: string;
    demo?: string;
    website?: string;
  };
}

export const projects: ProjectData[] = [
  {
    id: "openlive",
    name: "OpenLive",
    description: "OpenLiveプロジェクトの説明をここに記載",
    images: {
      thumbnail: "/textures/openlive.png",
      detail: "/textures/openlive_detail.png",
    },
    technologies: ["Next.js", "React", "TypeScript"],
    links: {
      // github: "https://github.com/...",
      // demo: "https://...",
    },
  },
  {
    id: "haral",
    name: "Haral",
    description: "Haralプロジェクトの説明をここに記載",
    images: {
      thumbnail: "/textures/haral.png",
      detail: "/textures/haral_detail.png",
    },
    technologies: ["Next.js", "React", "TypeScript"],
    links: {},
  },
  {
    id: "bitcoin",
    name: "Bitcoin",
    description: "Bitcoinプロジェクトの説明をここに記載",
    images: {
      thumbnail: "/textures/bitcoin.png",
      detail: "/textures/bitcoin_detail.png",
    },
    technologies: ["Next.js", "React", "TypeScript"],
    links: {},
  },
];

export function getProjectById(id: string): ProjectData | undefined {
  return projects.find((project) => project.id === id);
}

export function getProjectNameFromPicture(pictureName: string): string | undefined {
  const project = projects.find(
    (p) => p.images.thumbnail.includes(pictureName) || p.images.detail.includes(pictureName)
  );
  return project?.id;
}
