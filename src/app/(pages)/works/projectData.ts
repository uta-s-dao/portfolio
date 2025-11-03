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
    description: "大学の軽音学部などに所属する学生が行うフェスのウェブページ。学生向け音楽フェスティバル情報サイトとして、イベント情報を提供するプラットフォーム。",
    images: {
      thumbnail: "/textures/openlive.png",
      detail: "/textures/openlive_detail.png",
    },
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    links: {
      github: "https://github.com/uta-s-dao/OpenLive",
      website: "https://openlive.cc",
    },
  },
  {
    id: "haral",
    name: "Haram Checker",
    description: "Next.jsで構築されたフルスタックWebアプリケーション。Prismaを使用したデータベース連携機能を持ち、モダンなフロントエンド技術で実装。",
    images: {
      thumbnail: "/textures/haral.png",
      detail: "/textures/haral_detail.png",
    },
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "Vercel"],
    links: {
      github: "https://github.com/uta-s-dao/haram-checker",
      demo: "https://haram-checker.vercel.app",
    },
  },
  {
    id: "bitcoin",
    name: "Bitcoin Trading System",
    description: "Go言語で実装されたビットコイン自動取引システム。BitFlyer APIと連携し、テクニカル分析（go-talib）による取引アルゴリズムを実装したトレーディングボット。",
    images: {
      thumbnail: "/textures/bitcoin.png",
      detail: "/textures/bitcoin_detail.png",
    },
    technologies: ["Go", "WebSocket", "SQLite3", "go-talib", "BitFlyer API"],
    links: {
      github: "https://github.com/uta-s-dao/bitcoin",
    },
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
