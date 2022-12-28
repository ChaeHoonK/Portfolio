import styles from './PortfolioSection.module.css'
import type { Skill, Project } from '../types/types'
import ProjectComponent from './portfolio/ProjectComponent'

const sample3 : Skill = {name : 'JavaScript', comment : "very long kldsjflkasd fjlkasdjfkls adjflkasdjflkasdjfklasdjfklassdaffsadfasd", level : 'expert'}
const sample2 : Skill = {name : 'JavaScript', comment : "short", level : 'expert'}
const sample : Skill = {name : 'JavaScript', comment : "pretty good need some more work", level : 'beginner'}

const project : Project = {name : 'sample1', subname: "something project", year : "2022", tags:["backend"],imgs:['/devices.svg','/flash.svg','/communication.svg'],skills:[sample,sample2,sample3], description: "this is a good example of test testsetsetestsetset"}
const sample_projects = [project, project, project,project,project,project]

export default function PortfolioSection () {
    const projects = sample_projects.map((proj)=> {
        return <div className={styles.project}>
            <ProjectComponent project={proj}/>
        </div>
    })

    return (
        <div className={styles.container}>
            <h1>This is portfolio Section</h1>
            <div className={styles.portfolioContainer} >
                {projects}
            </div>
        </div>
    )
}