import fs from 'fs';
import papagoTranslate from './papago';

interface Project {
  name: string;
  subname: string;
  year: string;
  skills: { name: string; comment: string; level: string }[];
  imgs: string[];
  tags: string[];
  description: string;
  reference: { name: string; link: string }[];
}

export function parseJsonToProjects(jsonFilePath: string):Project[] {
  const dataBuffer = fs.readFileSync(jsonFilePath);
  const dataJson = dataBuffer.toString();
  return JSON.parse(dataJson) as Project[]
}

export async function traslateProject(project:Project, languageCode:string) {
  const result = {...project}
  const texts = [project.name,project.subname,project.description]
  const translatedTexts = await papagoTranslate(texts, languageCode)
  if (!translatedTexts) {
    return
  }
  let i = 0
  result.name = translatedTexts[i++]
  result.subname = translatedTexts[i++]
  result.description = translatedTexts[i++]
  return result
}

export function writeProjectJson(data:Project[], languageCode:string, filename:string) {
    // Write the translated data to a new .json file
    const translatedJson = JSON.stringify(data, null, 2);
    //filename = filename.slice(7)
    fs.writeFileSync(`${filename}${languageCode}.json`, translatedJson);
}

export async function updateProjectTranslation (languageCode:string, filename:string) {
  const original_projects = parseJsonToProjects(`${filename}.json`)
  const translated_projects = parseJsonToProjects(`${filename}${languageCode}.json`)
  const translated_projects_copy = [...translated_projects]
  const diff = original_projects.length - translated_projects.length

  if (diff == 0) {
    console.log('NO UPDATE IN PROJECTS')
    return
  }

  for(let i = 0 ; i < diff; ++i) {
    const curr = original_projects[translated_projects.length+i]
    console.log(`UPDATING Project ${curr.name}`)

    const translated_project = await traslateProject(curr, languageCode)
    if (translated_project) {
      translated_projects_copy.push(translated_project)
    }
  }
  writeProjectJson(translated_projects_copy, languageCode, filename)
}

export async function translateJsonProject(languageCode: string, filename: string) {
  console.log('******INFO: translateJsonProjectFile******')
  // Read the original .json file
  const data = parseJsonToProjects(filename);

  // Extract texts to translate
  const texts = data.flatMap(project => [
    project.name,
    project.subname,
    project.year,
    // ...project.skills.map(skill => skill.name),
    // ...project.skills.map(skill => skill.comment),
    // ...project.skills.map(skill => skill.level),
    project.description,
    // ...project.reference.map(ref => ref.name),
  ]);

  // Translate texts
  const translatedTexts = await papagoTranslate(texts, languageCode);

  if (!translatedTexts) {
    return
  }

  // Replace original texts with translations in the data
  let i = 0;
  for (const project of data) {
    project.name = translatedTexts[i++];
    project.subname = translatedTexts[i++];
    project.year = translatedTexts[i++];
    // for (const skill of project.skills) {
    //   skill.name = translatedTexts[i++];
    //   skill.comment = translatedTexts[i++];
    //   skill.level = translatedTexts[i++];
    // }
    project.description = translatedTexts[i++];
    // for (const ref of project.reference) {
    //   ref.name = translatedTexts[i++];
    // }
  }

  // Write the translated data to a new .json file
  const translatedJson = JSON.stringify(data, null, 2);
  //filename = filename.slice(7)
  fs.writeFileSync(`public/language/projects_${languageCode}.json`, translatedJson);
}


export async function translateJsonAbout(languageCode: string, filename: string) {
  console.log('******INFO: translateJsonAboutFile******')
  const dataBuffer = fs.readFileSync(filename);
  const dataJson = dataBuffer.toString();
  const data = JSON.parse(dataJson);

  const translatedTexts = await papagoTranslate(data, languageCode);

  if (!translatedTexts) {
    throw Error("Error occurred while Translating About")
  }

  const content = {
    intro : translatedTexts[0],
    efficiency : translatedTexts[1],
    user:translatedTexts[2],
    diversity:translatedTexts[3],
    communication:translatedTexts[4],
  };

  fs.writeFileSync(`public/language/about_${languageCode}.json`, JSON.stringify(content))

}

export async function translateJsonWorkDescriptions(languageCode: string, filename: string) {
  console.log('******INFO: translateJsonDescriptionsFile******')
  const dataBuffer = fs.readFileSync(filename);
  const dataJson = dataBuffer.toString();
  const data:Array<string[]> = JSON.parse(dataJson);


  const result = []
  for (let i = 0; i<data.length;i++) {
    const translatedTexts = await papagoTranslate(data[i], languageCode);
    if (!translatedTexts) {
      throw Error("Error occurred while Translating About")
    }
    result[i] = translatedTexts
  }
  

  fs.writeFileSync(`public/language/descriptions_${languageCode}.json`, JSON.stringify(result))
}