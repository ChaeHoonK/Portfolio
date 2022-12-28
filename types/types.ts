export type Project = {
    name : string;
    subname : string;
    year : string;
    imgs : string[];
    tags : string[];
    skills : Skill[];
    description : string;
    reference? : string;
}

export type Skill = {
    name : string;
    comment : string;
    level : Level;
}

export type Level = "beginner" | "intermediate" | "expert"