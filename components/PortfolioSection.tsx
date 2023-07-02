import styles from "./PortfolioSection.module.css";
import type { Skill, Project } from "../types/types";
import ProjectComponent from "./portfolio/ProjectComponent";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { projects as myprojects } from "../src/projects";
import { queryByTags } from "../library/functions";
import Button from "./Button";

import { useState, useCallback, useEffect } from "react";

const tags = ["All", "Backend", "Frontend", "DB", "Leadership", "Business", "Actuary"];

// const queryProjets = function (query : string) {
//     queryByTags(myprojects, query).map((proj)=> {
//         return <div className={styles.project}>
//             {proj ?<ProjectComponent project={proj}/> : null}
//         </div>
//     })
// }

export default function PortfolioSection() {
  const [projects, setProjects] = useState<(Project | undefined)[]>([]);
  const [tagClick, setTagClick] = useState(0);

  useEffect(() => {
    setProjects(myprojects);
  }, []);

  const calculateProjects = useCallback(
    (str: string) => {
      setProjects(queryByTags(myprojects, str));
    },
    [projects]
  );

  const [ref, observer] = useIntersectionObserver((entries: any) => {
    entries.forEach((entry: any) => {
      if (entry.intersectionRatio > 0) {
        entry.target.style.transition = "opacity 3s";
        entry.target.style.opacity = 1;
      } else {
        entry.target.style.opacity = 0;
      }
    });
  });

  const tagComponents = tags.map((elem, idx) => {
    return (
      <Button
        key={idx}
        text={elem}
        onClick={() => {
          calculateProjects(elem);
          setTagClick(idx);
        }}
        clicked={idx == tagClick}
      />
    );
  });

  const ProjectComponents = () =>
    projects.map((proj, idx) => {
      return (
        <div className={styles.project} key={idx}>
          {proj ? <ProjectComponent project={proj} /> : null}
        </div>
      );
    });

  return (
    <div className={styles.container} ref={ref}>
      <h1>Projects</h1>
      <br />
      <div style={{ display: "flex", gap: "10px", marginBottom: "10px", flexWrap: "wrap" }}>{tagComponents}</div>

      <div className={styles.portfolioContainer}>{ProjectComponents()}</div>
    </div>
  );
}
