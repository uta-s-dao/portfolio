import DesktopNavButton from "../components/DesktopNavButton";
import MobileNavButton from "../components/MobileNavButton";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <DesktopNavButton />
      <MobileNavButton />
      <div style={{ position: "relative", zIndex: 50 }}>{children}</div>
    </>
  );
}
