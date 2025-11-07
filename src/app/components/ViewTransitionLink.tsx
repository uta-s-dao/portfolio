"use client";

import NextLink from "next/link";
import { useRouter } from "next/navigation";
import { ComponentPropsWithoutRef, MouseEvent } from "react";

type ViewTransitionLinkProps = ComponentPropsWithoutRef<typeof NextLink>;

// Type definition for View Transitions API
interface DocumentWithViewTransition extends Document {
  startViewTransition(callback: () => void): ViewTransition;
}

interface ViewTransition {
  finished: Promise<void>;
  ready: Promise<void>;
  updateCallbackDone: Promise<void>;
}

export default function ViewTransitionLink({
  href,
  children,
  ...props
}: ViewTransitionLinkProps) {
  const router = useRouter();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    // Check if browser supports View Transitions API
    if ("startViewTransition" in document) {
      (document as DocumentWithViewTransition).startViewTransition(() => {
        router.push(href.toString());
      });
    } else {
      // Fallback for browsers that don't support View Transitions
      router.push(href.toString());
    }
  };

  return (
    <NextLink href={href} onClick={handleClick} {...props}>
      {children}
    </NextLink>
  );
}
