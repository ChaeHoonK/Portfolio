import type { Skill } from "../../types/types";
import styles from "./SkillComponent.module.css";
import { useState, useEffect } from "react";

export default function SkillComponent({ skill }: { skill: Skill }) {
  function randomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  }

    const borderColor = randomColor();

  return (
    <div className= {styles.dropdown}>
      <span
        className={styles.tag}
        style={{ border: `2px solid ${borderColor}` }}
      >
        {skill.name}
      </span>
      <div className={styles.comment}>
        {(skill.comment? skill.comment : `Level: ${skill.level}`)}
      </div>
      
    </div>
  );
}
