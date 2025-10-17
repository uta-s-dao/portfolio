import { Righteous } from "next/font/google";
// Righteous, Black_Ops_One
const righteous = Righteous({ weight: "400", subsets: ["latin"] }); // レトロゲーム風

export const metadata = {
  title: "Yuta Saruwatari",
  description: "猿渡雄太のポートフォリオサイト",
  keywords: ["猿渡雄太", "Yuta Saruwatari", "Portfolio", "Software Engineer"],
  authors: [{ name: "Yuta Saruwatari" }],
  creator: "Yuta Saruwatari",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={righteous.className}>
      <body>{children}</body>
    </html>
  );
}
