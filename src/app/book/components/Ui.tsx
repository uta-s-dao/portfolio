import { atom, useAtom } from "jotai";
import { useEffect, useRef } from "react";
import styles from "./ui.module.css";

const pictures = [
  "openlive",
  "openlive_detail",
  "haral",
  "haral_detail",
  "bitcoin",
  "bitcoin_detail",
];

export const pageAtom = atom(0);
export const pages = [
  {
    front: "book-cover",
    back: pictures[0],
  },
];

for (let i = 1; i < pictures.length - 1; i += 2) {
  pages.push({
    front: pictures[i % pictures.length],
    back: pictures[(i + 1) % pictures.length],
  });
}

pages.push({
  front: pictures[pictures.length - 1],
  back: "book-back",
});

export const UI = () => {
  const [page, setPage] = useAtom(pageAtom);
  const isFirstRender = useRef(true);

  // スワイプ用の状態
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    // 音声再生
    const audio = new Audio("/audios/page-flip-01a.mp3");
    audio.play().catch((error) => {
      console.log("Audio playback failed:", error);
    });
  }, [page]);

  // キーボード操作
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        // 左矢印キー：前のページ
        setPage((prev) => Math.max(0, prev - 1));
      } else if (e.key === "ArrowRight") {
        // 右矢印キー：次のページ
        setPage((prev) => Math.min(pages.length, prev + 1));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [setPage]);

  // スワイプ操作
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const swipeDistance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50; // 最小スワイプ距離

    if (Math.abs(swipeDistance) > minSwipeDistance) {
      if (swipeDistance > 0) {
        // 左スワイプ：次のページ
        setPage((prev) => Math.min(pages.length, prev + 1));
      } else {
        // 右スワイプ：前のページ
        setPage((prev) => Math.max(0, prev - 1));
      }
    }

    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  const getCurrentPageTitle = () => {
    if (page === 0) return "Cover";
    if (page === pages.length) return "Back Cover";
    return pictures[2 * (page - 1)];
  };

  return (
    <main
      className={styles.uiContainer}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <nav className={styles.navigation}>
        <div className={styles.fusen}>{getCurrentPageTitle()}</div>
        <div className={styles.pageControls}>
          <button
            className={styles.navButton}
            onClick={() => setPage((p) => Math.max(p - 1, 0))}
          >
            ←
          </button>
          <div className={styles.pageIndicator}>
            <span key={page} className={styles.pageNumber}>
              {Math.min(page, Math.floor(pictures.length / 2))}
            </span>
            <span>/</span>
            <span>{Math.floor(pictures.length / 2)}</span>
          </div>
          <button
            className={styles.navButton}
            onClick={() => setPage((p) => Math.min(p + 1, pictures.length - 1))}
          >
            →
          </button>
        </div>
      </nav>
    </main>
  );
};
