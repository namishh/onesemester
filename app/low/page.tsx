import Generate from "../components/generate";
import { promises as fs } from 'fs';

export default async function Low() {
  const file = await fs.readFile(process.cwd() + '/app/data/low.json', 'utf8');
  const data = JSON.parse(file) as LearningPlan;
  return <Generate learningPlan={data}/>
}