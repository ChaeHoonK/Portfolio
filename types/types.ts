export type Project = {
    name : string;
    subname : string;
    year : string;
    imgs : string[];
    videos? : string[];
    tags : string[];
    skills : Skill[];
    description : string;
    reference? : {name: string, link : string}[];
}

export type Skill = {
    name : string;
    comment?: string;
    level : Level;
}

export type Level = "beginner" | "intermediate" | "expert"