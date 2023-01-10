import styles from "./SkillsSection.module.css";
import Button from "./Button";
import type { Skill } from "../types/types";
import SkillComponent from "./portfolio/SkillComponent";
import { front, back, python, deploy, vsc, concept, wish } from "../src/tech";

function MakeSkillComponents(skills: Skill[]) {
  return skills.map((skill, idx) => {
    return <SkillComponent key={idx} skill={skill} />;
  });
}

export default function SkillsSection() {
  return (
    <div className={styles.container}>
      <h1 style={{ alignSelf: "center" }}>Skills</h1>
      <div className={styles.tmp}>
        <div className={styles.skillsContainer}>
          <h3>Frontend: </h3>
          <div>{MakeSkillComponents(front)}</div>
        </div>

        <div className={styles.skillsContainer}>
          <h3>Backend: </h3>
          <div>{MakeSkillComponents(back)}</div>
        </div>

        <div className={styles.skillsContainer}>
          <h3>Python: </h3>
          <div>{MakeSkillComponents(python)}</div>
        </div>

        <div className={styles.skillsContainer}>
          <h3>Deploy: </h3>
          <div>{MakeSkillComponents(deploy)}</div>
        </div>

        <div className={styles.skillsContainer}>
          <h3>VCS: </h3>
          <div>{MakeSkillComponents(vsc)}</div>
        </div>

        <div className={styles.skillsContainer}>
          <h3>Concepts: </h3>
          <div>{MakeSkillComponents(concept)}</div>
        </div>
      </div>
    </div>
  );
}
