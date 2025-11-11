"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./MobileWorksPage.module.css";

const projects = [
  {
    id: "openlive",
    title: "OpenLive",
    image: "/works/openlive.png",
  },
  {
    id: "haral",
    title: "Haral",
    image: "/works/haral.png",
  },
  {
    id: "bitcoin",
    title: "Bitcoin",
    image: "/works/bitcoin.png",
  },
];

export default function MobileWorksPage() {
  const router = useRouter();

  const handleProjectClick = (projectId: string) => {
    const targetPath = `/works/${projectId}`;

    // Set direction as forward
    document.documentElement.dataset.direction = "forward";

    // Check if browser supports View Transitions API
    if ("startViewTransition" in document) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (document as any).startViewTransition(() => {
        router.push(targetPath);
      });
    } else {
      router.push(targetPath);
    }
  };

  return (
    <div className='mobileLayout'>
      <div className={styles.mobileOnly}>
        <div className={styles.mobileWorksContainer}>
          <div className={styles.projectGrid}>
            {projects.map((project) => (
              <div
                key={project.id}
                className={styles.projectCard}
                onClick={() => handleProjectClick(project.id)}
              >
                <div className={styles.projectImageWrapper}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes='(max-width: 767px) 90vw, 0vw'
                  />
                </div>
                <h3 className={styles.projectTitle}>{project.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
