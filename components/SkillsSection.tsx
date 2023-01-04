import styles from './SkillsSection.module.css'
import Button from './Button'
import type { Skill } from '../types/types';
import SkillComponent from './portfolio/SkillComponent';
import {front, back, python, deploy, vsc, concept, wish} from '../src/tech'


function MakeSkillComponents(skills : Skill[]) {
    return skills.map((skill,idx) => {
        return <SkillComponent key={idx} skill={skill} />;
      });
}

export default function SkillsSection () {
    return (
        <div className={styles.container}>
            <h1>Skills</h1>
            <div className = {styles.skillsContainer}>
                <span>Frontend: </span>
                {MakeSkillComponents(front)}
            </div>
            
            <div className = {styles.skillsContainer}>
                <span>Backend: </span>
                {MakeSkillComponents(back)}
            </div>

            <div className = {styles.skillsContainer}>
                <span>Python: </span>
                {MakeSkillComponents(python)}
            </div>

            <div className = {styles.skillsContainer}>
                <span>Deploy: </span>
                {MakeSkillComponents(deploy)}
            </div>

            <div className = {styles.skillsContainer}>
                <span>VCS: </span>
                {MakeSkillComponents(vsc)}
            </div>
            
            <div className = {styles.skillsContainer}>
                <span>Concepts: </span>
                {MakeSkillComponents(concept)}
            </div>
            
            
        </div>
    )
}