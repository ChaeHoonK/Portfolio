export type Description = {
    name : string;
    subname : string;
    year : string;
    tags : string[];
    reference? : string;
}

export type Skill = {
    name : string;
    comment : string;
    level : Level;
}

export type Level = "beginner" | "intermediate" | "expert"