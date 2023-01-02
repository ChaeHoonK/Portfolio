import type { Project, Skill } from "../types/types";

const TypeScript: Skill = {
  name: "TypeScript",
  comment: "Expert",
  level: "expert",
};

const MongoDB: Skill = {
  name: "MongoDB",
  comment: "beginner",
  level: "beginner",
};

const Python : Skill = {
    name: "Python",
    comment : 'know how to use machine learning library such as Pandas, Numpy, and Tensorflow',
    level : "intermediate"
}

const Tauri : Skill = {
    name: "Tauri",
    comment : 'Only know very basic functionality',
    level :'beginner'
}

const RESTAPI : Skill = {
  name : "Rest Api",
  comment : "fetching from both front and backend",
  level : 'intermediate'
}

const Javascript : Skill = {
  name : "Javascript",
  comment : "confident with Javascript",
  level : 'expert'
}

const Socket : Skill = {
  name : 'Socket',
  comment : 'have implemented simple chat app with Socket.io',
  level : 'beginner'
}

const RegEx : Skill = {
  name : 'RegEx',
  comment : ' ',
  level : 'intermediate'
}

const MachineLearning : Skill = {
  name : "Machine Learning",
  comment : 'have build CNN model with Keras, XGBoost model with SKlearn',
  level : 'intermediate'
}

const roomie: Project = {
  name: "Roomie",
  subname: "Roommate Matching App",
  year: "2022",
  skills: [TypeScript, MongoDB, Python],
  imgs: [
    "https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FChaeHoonNote%2FZzYGrVU46O.png?alt=media&token=c3a459f4-a353-476f-886d-4b78e2cd3810",
    "https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FChaeHoonNote%2FzIWDdtWK1F.png?alt=media&token=79422de8-d1f5-4ea9-946e-61a2e68f420d",
    "https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FChaeHoonNote%2FbCCCSkE9Iv.png?alt=media&token=17234a0c-c38d-4b9b-97ec-e13dcdc51672",
    "https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FChaeHoonNote%2FikEjI7dqUi.png?alt=media&token=a61399d7-4699-4f58-b848-0f94f1935679",
    "https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FChaeHoonNote%2FSsfOSk1Mbo.png?alt=media&token=49bf9a5b-7f02-4d4a-b2e3-cbdbc8c626e1",
  ],
  tags: ["Frontend", "Backend", "DB", "LogIn"],
  description: `This project is a full stack website with login. Since it doesn't require sensitive information Login is simply implemented with JWT. PW is safely hashed before saving in DB. There exist a simple Flask (Python) Server that returns a list of users sorted my matching weights (using Pandas Library).`,
  reference: [{name:'Demo', link:"https://roomie-one.vercel.app/"}],
};

const petfinder: Project = {
  name: "Pet Finder",
  subname: "Find Adoption Speed based on Trained Model",
  year: "2022",
  skills: [TypeScript, Python, MachineLearning],
  imgs: [
    "https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FChaeHoonNote%2FumB6Ma6m1g.png?alt=media&token=2e3bd185-65e5-4ac9-85d7-57006192514c",
  ],
  tags: ["Frontend", "Backend", "DataBase", "Machine Learning", "Keras"],
  description: "This project is a machine learning based project. Users fill out the souveneir about their pets, and the app will return expected adoption speed category range from 0 to 4",
  reference: [{name:'Demo',link:"https://pet-finder-zeta.vercel.app/"}],
  videos:['https://www.youtube.com/embed/-dg41MKKZwI','https://www.youtube.com/embed/gCNdHcvsRUI']
};

const automaticLedger : Project = {
    name : 'OCR Project',
    subname  : 'Creates Ledger Excel file with PDF or Picture',
    year: '2022',
    skills:[TypeScript, Tauri, RESTAPI, RegEx],
    imgs: [
      "https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FChaeHoonNote%2FLXsEDZUDZQ.png?alt=media&token=05f45015-d0c9-4a09-a232-12205226e9f5",
      "https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FChaeHoonNote%2Foj2kQopf8s.png?alt=media&token=5b3e82dc-bc57-472d-8662-7a97b0f39649"
    ],
    videos:['https://www.youtube.com/embed/0IXLSEBvlGs'],
    tags:["Web","Desktop"],
    reference: [{name: 'Github Repository', link : 'https://github.com/ChaeHoonK/OCR_project'}],
    description: "This project is done for internal business purpose. It receives text date from formatted scanned image or PDF using external OCR service api. The program parses the given text data and creates an EXCEL file. It has successfully reduced the time spent for bookkeeping since a bookkeeper only requires to upload the excel file to ERP."
}

const simpleChat : Project = {
  name : 'Simple Chat App',
  subname : "Chat with Socket.io, express, and Pug template",
  year: '2022',
  skills: [Javascript, Socket],
  imgs: [
    "https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FChaeHoonNote%2FWhBfK5Q3CU.png?alt=media&token=2eac870a-adb7-4829-adef-f5818a719aa6"
  ],
  videos:['https://www.youtube.com/embed/MEU64xuvpFg'],
  tags:['Socket', 'Backend', "Frontend"],
  description: 'Pure Html, CSS, JS project using pug template engine for learning purpose.'
}

export const projects: Project[] = [roomie, petfinder, automaticLedger, simpleChat];
