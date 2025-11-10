import { notFound } from "next/navigation";
import { getProjectById, projects } from "../projectData";
import Image from "next/image";
import ViewTransitionLink from "../../../components/ViewTransitionLink";
import styles from "./page.module.css";
import styles1 from "../../../components/components.module.css";
import { BsGithub } from "react-icons/bs";
import { IoArrowBack } from "react-icons/io5";

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    notFound();
  }

  return (
    <div className={styles1.desktopOnly}>
      <div className={styles.container}>
        <div className={styles.header}>
          <ViewTransitionLink href='/works' className={styles.backButton}>
            <IoArrowBack className={styles.backIcon} color='black' />
          </ViewTransitionLink>
          <h2 className={styles.fusen}>{project.name}</h2>
        </div>

        <div className={styles.content}>
          <div className={styles.infoSection}>
            <h2>プロジェクト概要</h2>
            <div className={styles.description}>{project.description}</div>

            {project.technologies && project.technologies.length > 0 && (
              <div className={styles.techSection}>
                <h3>使用技術</h3>
                <div className={styles.techTags}>
                  {project.technologies.map((tech) => (
                    <span key={tech} className={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {project.links && Object.keys(project.links).length > 0 && (
              <div className={styles.linksSection}>
                <h3>リンク</h3>
                <div className={styles.links}>
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target='_blank'
                      rel='noopener noreferrer'
                      className={styles.link}
                    >
                      <BsGithub size={30} color='rgb(0,100,0)' />
                    </a>
                  )}
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target='_blank'
                      rel='noopener noreferrer'
                      className={styles.link}
                    >
                      デモ
                    </a>
                  )}
                  {project.links.website && (
                    <a
                      href={project.links.website}
                      target='_blank'
                      rel='noopener noreferrer'
                      className={styles.link}
                    >
                      ウェブサイト
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>

          <div className={styles.imageSection}>
            <Image
              src={project.images.detail}
              alt={project.name}
              width={800}
              height={600}
              className={styles.detailImage}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
