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

export async function translateJsonProject(languageCode: string, filename: string) {
  console.log('******INFO: translateJsonFile******')
  // Read the original .json file
  const dataBuffer = fs.readFileSync(filename);
  const dataJson = dataBuffer.toString();
  const data = JSON.parse(dataJson) as Project[];

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
  fs.writeFileSync(`public/projects_${languageCode}.json`, translatedJson);
}

