import type {Project} from '../types/types'



export function queryByTags(projects : Project[] ,query : string) : (Project|undefined)[] {
    if (query == 'All')
        return projects;
    
    const result: Project[] = []

    projects.forEach((project)=> {
        if (project.tags.includes(query))
            result.push(project);
    })

    return result
}