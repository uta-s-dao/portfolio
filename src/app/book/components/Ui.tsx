import { atom, useAtom } from "jotai";
import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./ui.module.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const pictures = [
  "openlive",
  "openlive_detail",
  "haral",
  "haral_detail",
  "bitcoin",
  "bitcoin_detail",
];

// プロジェクトIDのマッピング
const projectIdMap: { [key: string]: string } = {
  openlive: "openlive",
  openlive_detail: "openlive",
  haral: "haral",
  haral_detail: "haral",
  bitcoin: "bitcoin",
  bitcoin_detail: "bitcoin",
};

export const pageAtom = atom(0);
export const isAnimatingAtom = atom(false);
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
  back: "book-back-cover",
});

export const UI = () => {
  const [page, setPage] = useAtom(pageAtom);
  const [isAnimating, setIsAnimating] = useAtom(isAnimatingAtom);
  const router = useRouter();
  const [fusenAnimated, setFusenAnimated] = useState(false);
  const [prevPage, setPrevPage] = useState(page);

  // スワイプ用の状態
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const getCurrentPageTitle = useCallback(() => {
    if (page === 0) return "Cover";
    if (page === pages.length) return "Back Cover";
    return pictures[2 * (page - 1)];
  }, [page]);

  const formatTitle = (title: string) => {
    if (title === "Cover" || title === "Back Cover") return title;
    return title
      .split("_")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");
  };

  useEffect(() => {
    // ページが変更されていない場合は何もしない
    if (page === prevPage) {
      return;
    }

    // アニメーション開始
    setIsAnimating(true);

    // 音声再生
    const audio = new Audio("/audios/page-flip-01a.mp3");
    audio.play().catch((error) => {
      console.log("Audio playback failed:", error);
    });

    // アニメーション完了後に前のページを更新
    const timer = setTimeout(() => {
      setPrevPage(page);
      setIsAnimating(false);
    }, 400);

    return () => clearTimeout(timer);
  }, [page, setIsAnimating, prevPage]);

  // 付箋の3Dアニメーション（3秒後に実行、0.4秒後に元に戻る）
  useEffect(() => {
    const currentTitle = getCurrentPageTitle();
    if (currentTitle === "Cover" || currentTitle === "Back Cover") {
      setFusenAnimated(false);
      return;
    }

    setFusenAnimated(false);
    const animateTimer = setTimeout(() => {
      setFusenAnimated(true);

      // 0.4秒後に元に戻す
      const resetTimer = setTimeout(() => {
        setFusenAnimated(false);
      }, 400);

      return () => clearTimeout(resetTimer);
    }, 3000);

    return () => clearTimeout(animateTimer);
  }, [page, getCurrentPageTitle]);

  // キーボード操作
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isAnimating) return; // アニメーション中は無効化

      if (e.key === "ArrowLeft") {
        // 左矢印キー：前のページ
        setPage((prev) => Math.max(0, prev - 1));
      } else if (e.key === "ArrowRight") {
        // 右矢印キー：次のページ
        if (page > Math.floor(pictures.length / 2)) return;
        setPage((prev) =>
          Math.min(Math.floor(pictures.length + 2 / 2), prev + 1)
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [setPage, isAnimating, page]);

  // スワイプ操作
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (isAnimating) return; // アニメーション中は無効化

    const swipeDistance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50; // 最小スワイプ距離

    if (Math.abs(swipeDistance) > minSwipeDistance) {
      if (swipeDistance > 0) {
        // 左スワイプ：次のページ
        setPage((prev) => Math.min(Math.floor(pictures.length / 2), prev + 1));
      } else {
        // 右スワイプ：前のページ
        setPage((prev) => Math.max(0, prev - 1));
      }
    }

    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  const handleFusenClick = () => {
    const currentTitle = getCurrentPageTitle();
    if (currentTitle === "Cover" || currentTitle === "Back Cover") {
      return; // カバーページでは何もしない
    }

    const projectId = projectIdMap[currentTitle];
    if (projectId) {
      router.push(`/works/${projectId}`);
    }
  };

  return (
    <main
      className={styles.uiContainer}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <nav className={styles.navigation}>
        <button
          className={`${styles.fusen} ${
            fusenAnimated ? styles.fusenAnimated : ""
          }`}
          onClick={handleFusenClick}
        >
          {formatTitle(getCurrentPageTitle())}
        </button>
        <div className={styles.pageControls}>
          <button
            className={styles.navUiButton}
            onClick={() => setPage((p) => Math.max(p - 1, 0))}
          >
            <IoIosArrowBack />
          </button>
          <div className={styles.pageIndicator}>
            <div className={styles.pageNumberContainer}>
              {prevPage !== page && (
                <span
                  key={`prev-${prevPage}`}
                  className={styles.pageNumberExit}
                >
                  {Math.min(prevPage, Math.floor(pictures.length + 2 / 2))}
                </span>
              )}
              <span key={`current-${page}`} className={styles.pageNumber}>
                {Math.min(page, Math.floor(pictures.length + 2 / 2))}
              </span>
            </div>
            <span>/</span>
            <span>{Math.floor(pictures.length / 2)}</span>
          </div>
          <button
            className={styles.navUiButton}
            onClick={() =>
              setPage((p) => Math.min(p + 1, Math.floor(pictures.length / 2)))
            }
          >
            <IoIosArrowForward />
          </button>
        </div>
      </nav>
    </main>
  );
};
