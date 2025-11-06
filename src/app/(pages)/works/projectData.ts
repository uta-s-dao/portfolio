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
    description:
      "福岡・北九州エリア14大学から参加する学生音楽フェスティバル「OpenLive」の公式Webサイト。334人の来場者を達成した大型イベントのプラットフォーム。要件定義から運用まで全工程を単独で実施し、Cloudflare CDNによるパフォーマンス最適化で応答速度を1.0秒から0.45秒に改善（55%向上）。SEO最適化により「オープンライブ 福岡」で検索上位表示を達成。プロバンド「HERO COMPLEX」との出演交渉も成功させ、イベントの価値向上に貢献。",
    images: {
      thumbnail: "/textures/openlive.png",
      detail: "/textures/openlive_detail.png",
    },
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "AWS",
      "Cloudflare",
      "SEO",
    ],
    links: {
      github: "https://github.com/uta-s-dao/OpenLive",
      website: "https://openlive.cc",
    },
  },
  {
    id: "haral",
    name: "Haram Checker",
    description:
      "イスラム教徒向けのハラル食品判定ウェブアプリケーション。食品のハラル（許可された）・ハラム（禁止された）をデータベースと照合して瞬時に判定する機能を提供。Next.jsとPrismaを使用したフルスタックアプリケーションで、TypeScriptによる型安全な実装と、Tailwind CSSを活用したレスポンシブデザインを実現。Vercelへのデプロイによりグローバルに高速アクセス可能なサービスとして提供。",
    images: {
      thumbnail: "/textures/haral.png",
      detail: "/textures/haral_detail.png",
    },
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "Vercel",
    ],
    links: {
      github: "https://github.com/uta-s-dao/haram-checker",
      demo: "https://haram-checker.vercel.app",
    },
  },
  {
    id: "bitcoin",
    name: "Bitcoin Trading System",
    description:
      "Go言語で実装したビットコイン自動取引システム。BitFlyerAPIと連携してリアルタイムで価格データを取得し、複数のテクニカル指標（EMA、ボリンジャーバンド、一目均衡表、MACD、RSI）を組み合わせた取引戦略を実行。WebSocket通信による低遅延データ取得、SQLiteによる取引履歴管理、バックテスト機能による戦略検証、GoogleChartsを使用したウェブインターフェースでのチャート表示など、本格的な取引システムの機能を実装。並行処理(goroutine)を活用した効率的なアーキテクチャ設計。",
    images: {
      thumbnail: "/textures/bitcoin.png",
      detail: "/textures/bitcoin_detail.png",
    },
    technologies: [
      "Go",
      "WebSocket",
      "SQLite3",
      "go-talib",
      "BitFlyer API",
      "Google Charts",
      "goroutine",
    ],
    links: {
      github: "https://github.com/uta-s-dao/bitcoin",
    },
  },
];

export function getProjectById(id: string): ProjectData | undefined {
  return projects.find((project) => project.id === id);
}

export function getProjectNameFromPicture(
  pictureName: string
): string | undefined {
  const project = projects.find(
    (p) =>
      p.images.thumbnail.includes(pictureName) ||
      p.images.detail.includes(pictureName)
  );
  return project?.id;
}
