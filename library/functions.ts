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

export function isMobile() {
    const userAgent = typeof window.navigator === "undefined" ? "" : navigator.userAgent;
    const mobile = /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/.test(
        userAgent
    );

    if (mobile) {
        return true;
    } else {
        return false;
    }
}

export function createPopUp(src:URL, title:string) {
    let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
width=600,height=300,left=100,top=100`;
      if (!isMobile())
        window.open(src,title,params)
}

