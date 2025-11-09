"use client";

import NextLink from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { ComponentPropsWithoutRef, MouseEvent } from "react";

type ViewTransitionLinkProps = ComponentPropsWithoutRef<typeof NextLink>;

// Page order for determining slide direction
const PAGE_ORDER: Record<string, number> = {
  "/": 0,
  "/works": 1,
  "/works/detail": 1.5, // Detail pages are between /works and /about
  "/about": 2,
};

export default function ViewTransitionLink({
  href,
  children,
  ...props
}: ViewTransitionLinkProps) {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const targetPath = href.toString();

    // Normalize paths to handle dynamic routes and trailing slashes
    const normalizePathForDirection = (path: string) => {
      // Extract the first segment after '/'
      const segments = path.split("/").filter(Boolean);
      if (segments.length === 0) return "/";
      // Handle /works/[id] detail pages
      if (segments[0] === "works" && segments.length > 1) {
        return "/works/detail";
      }
      return `/${segments[0]}`;
    };

    const normalizedCurrent = normalizePathForDirection(pathname);
    const normalizedTarget = normalizePathForDirection(targetPath);

    const currentIndex = PAGE_ORDER[normalizedCurrent] ?? 0;
    const targetIndex = PAGE_ORDER[normalizedTarget] ?? 0;
    const direction = targetIndex > currentIndex ? "forward" : "backward";

    // Set direction as data attribute for CSS
    document.documentElement.dataset.direction = direction;

    // Check if browser supports View Transitions API
    if ("startViewTransition" in document) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (document as any).startViewTransition(() => {
        router.push(targetPath);
      });
    } else {
      // Fallback for browsers that don't support View Transitions
      router.push(targetPath);
    }
  };

  return (
    <NextLink href={href} onClick={handleClick} {...props}>
      {children}
    </NextLink>
  );
}
