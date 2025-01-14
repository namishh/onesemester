import Generate from "../components/generate";
import { promises as fs } from 'fs';

export default async function Devops() {
  const file = await fs.readFile(process.cwd() + '/app/data/devops.json', 'utf8');
  const data = JSON.parse(file) as LearningPlan;
  return <Generate learningPlan={data}/>
}