"use client";

import { atom, useAtom } from "jotai";
import { useEffect } from "react";
import Link from "next/link";
import BookCover from "./AllWork/BookCover";
import BookBack from "./AllWork/BookBack";
import Openlive from "./AllWork/Openlive";
import Project1 from "./AllWork/Project1";
import Project2 from "./AllWork/Project2";
import Project3 from "./AllWork/Project3";

export const pageAtom = atom(0);
export const pages = [
  {
    front: BookCover,
    back: Openlive,
  },
  {
    front: Project1,
    back: Project2,
  },
  {
    front: Project3,
    back: BookBack,
  },
];

export const UI = () => {
  const [page, setPage] = useAtom(pageAtom);

  useEffect(() => {
    const audio = new Audio("/audios/page-flip-01a.mp3");
    audio.play();
  }, [page]);

  return (
    <>
      <main className=' pointer-events-none select-none z-10 fixed  inset-0  flex justify-between flex-col'>
        <div className='w-full overflow-auto pointer-events-auto flex justify-center'>
          <div className='overflow-auto flex items-center gap-4 max-w-full p-10'>
            {[...pages].map((_, index) => (
              <button
                key={index}
                className={`border-transparent hover:border-white transition-all duration-300  px-4 py-3 rounded-full  text-lg uppercase shrink-0 border ${
                  index === page
                    ? "bg-white/90 text-black"
                    : "bg-black/30 text-white"
                }`}
                onClick={() => setPage(index)}
              >
                {index === 0 ? "Cover" : `Page ${index}`}
              </button>
            ))}
            <button
              className={`border-transparent hover:border-white transition-all duration-300  px-4 py-3 rounded-full  text-lg uppercase shrink-0 border ${
                page === pages.length
                  ? "bg-white/90 text-black"
                  : "bg-black/30 text-white"
              }`}
              onClick={() => setPage(pages.length)}
            >
              Back Cover
            </button>
          </div>
        </div>
      </main>

      <div className='fixed inset-0 flex items-center -rotate-2 select-none hidden'>
        <div className='relative'>
          <div className='bg-white/0  animate-horizontal-scroll flex items-center gap-8 w-max px-8'></div>
        </div>
      </div>
    </>
  );
};
