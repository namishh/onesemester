import type { Metadata } from "next";
import Generate from "../components/generate";
import { promises as fs } from 'fs';


export const metadata: Metadata = {
    title: "C and Rust Roadmap",
    description: "Low level programming languages",
    twitter: {
        card: 'summary_large_image',
        title: 'C and Rust Roadmap',
        description: 'Low level programming languages',
        images: ['https://i.imgur.com/BwGG7Ch.png'],
    },
    openGraph: {
        title: 'C and Rust Roadmap',
        description: 'Low level programming languages',
        images: [
            {
                url: 'https://i.imgur.com/BwGG7Ch.png', 
                width: 800,
                height: 600,
            },
            {
                url: 'https://i.imgur.com/BwGG7Ch.png',
                width: 1800,
                height: 1600,
                alt: 'My custom alt',
            },
        ],
    }
}


export default async function Low() {
  const file = await fs.readFile(process.cwd() + '/app/data/low.json', 'utf8');
  const data = JSON.parse(file) as LearningPlan;
  return <Generate learningPlan={data}/>
}