import styles from './PortfolioSection.module.css'
import type { Skill, Project } from '../types/types'
import ProjectComponent from './portfolio/ProjectComponent'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { projects as myprojects } from '../src/projects'
import { queryByTags } from '../library/functions'
import Button from './Button'

import {useState, useCallback, useEffect} from 'react'

const sample3 : Skill = {name : 'JavaScript', comment : "very long kldsjflkasd fjlkasdjfkls adjflkasdjflkasdjfklasdjfklassdaffsadfasd", level : 'expert'}
const sample2 : Skill = {name : 'JavaScript', comment : "short", level : 'expert'}
const sample : Skill = {name : 'JavaScript', comment : "pretty good need some more work", level : 'beginner'}

const project : Project = {name : 'sample1', subname: "something project", year : "2022", tags:["backend"],imgs:['/devices.svg','/flash.svg','/communication.svg'],skills:[sample,sample2,sample3], description: "this is a good example of test testsetsetestsetset"}
const sample_projects = [project, project, project,project,project,project]

const tags = ['all', 'Backend', 'Frontend','DB']



const queryProjets = function (query : string) {
    queryByTags(myprojects, query).map((proj)=> {
        return <div className={styles.project}>
            {proj ?<ProjectComponent project={proj}/> : null}
        </div>
    })
}



export default function PortfolioSection () {
    const [projects, setProjects] = useState<(Project|undefined)[]>([])
    const [tagClick, setTagClick] = useState(0)

    useEffect(()=> {
        setProjects(myprojects)
    },[])

    const calculateProjects = useCallback((str : string)=> {
        setProjects(queryByTags(myprojects,str))
    }, [projects])


    const [ref, observer] = useIntersectionObserver((entries : any) => {
        entries.forEach((entry : any) => {
            if (entry.intersectionRatio > 0) {
            entry.target.style.transition = 'opacity 3s';
            entry.target.style.opacity = 1;
          } else {
            entry.target.style.opacity = 0;
          }
        });
      });

    const tagComponents = tags.map ((elem,idx) => {
        return <Button text = {elem} onClick = {()=>{
            calculateProjects(elem)
            setTagClick(idx);
        }} 
        clicked = {idx == tagClick}
        />
    })

    const ProjectComponents = ()=>projects.map((proj)=> {
        return <div className={styles.project}>
            {proj ? <ProjectComponent project={proj}/> : null}
        </div>
    })


    return (
        <div className={styles.container} ref = {ref}>
            <h1>Projects</h1>
            <div style={{display : 'flex', gap:'10px'}}>
                {tagComponents}
            </div>

            <div className={styles.portfolioContainer} >
                {ProjectComponents()}
            </div>
        </div>
    )
}