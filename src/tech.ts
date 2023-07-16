export const sample = {
    
}


import type { Skill } from "../types/types"

// Front
const html : Skill= {name : 'HTML + CSS', comment: '', level : "expert"}
const react : Skill = {name : 'React', level : 'expert' }
const nextjs : Skill = {name : 'Next JS', level : 'intermediate'};
const mfc : Skill = {name : 'MFC', level : 'intermediate'};
const redux : Skill = {name : 'Redux', level : 'beginner'};



// Back
// Lib
const mongoose : Skill = {name : "Mongoose", level :'beginner'};

const express : Skill = {name:'Express', level : 'intermediate'};
const socket : Skill = {name:'Socket IO', level : 'beginner'};



//lib - python
const pandas : Skill = {name : 'Pandas', level : 'intermediate'};
const sklearn : Skill = {name : 'Sci-Kit Learn', level : 'intermediate'};
const numpy : Skill = {name : 'Numpy', level : 'intermediate'}
const tensorflow : Skill = {name : 'Tensorflow', level : 'beginner'}
const pytorch : Skill = {name : 'PyTorch', level : 'beginner'}
const fastapi : Skill = {name : 'fastAPI', level : 'intermediate'}

// FW - python
const flask : Skill = {name : "Flask", level : 'beginner'}



//Deployment
const cpanel : Skill = {name : 'CPanel', level : 'beginner'}
const vercel : Skill = {name : 'Vercel', level :'beginner'}
const docker : Skill = {name: 'Docker', level : 'beginner'}
const gcloud : Skill = {name: 'Google Cloud', level : 'beginner'}



//VCS
const git : Skill = {name :'Git', level:'intermediate'}
const tortois : Skill = {name : 'SVN Tortois', level :'beginner'}



// Concepts
const restapi : Skill = {name : 'REST Api', level : 'intermediate'}
const ajax : Skill = {name : 'AJAX', level : 'beginner'}
const cookie : Skill = {name : 'Cookie', level : 'intermediate'}
const jwt : Skill = {name : 'JWT', level : "beginner"}





export const front = [html, react, nextjs,mfc, redux]
export const back = [mongoose,express,socket]
export const python = [pandas, sklearn,numpy,tensorflow, pytorch, flask, fastapi]
export const deploy = [cpanel,vercel,docker,gcloud]

export const vsc = [git, tortois]

export const concept = [restapi, ajax,cookie,jwt]

export const wish = ['Web Assembley', 'React Testing', 'Lean and Agile Software Development Skills']


