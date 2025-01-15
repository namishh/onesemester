import { Metadata } from "next";
import Generate from "../components/generate";
import { promises as fs } from 'fs';

export const metadata: Metadata = {
    title: "Web Development Roadmap",
    description: "Full stack development with JavaScript and NextJS",
    twitter: {
        card: 'summary_large_image',
        title: 'Web Development Roadmap',
        description: 'Full stack development with JavaScript and NextJS',
        images: ['https://i.imgur.com/sy7ZTsr.png'],
    },
    openGraph: {
        siteName: "One Semester",
        title: 'Web Development Roadmap',
        description: 'Full stack development with JavaScript and NextJS',
        images: [
            {
                url: 'https://i.imgur.com/sy7ZTsr.png', 
                width: 800,
                height: 600,
            },
            {
                url: 'https://i.imgur.com/sy7ZTsr.png',
                width: 1800,
                height: 1600,
                alt: 'My custom alt',
            },
        ],
    }
}

type Props = {
    searchParams: Promise<{ m?: string }>
}

export default async function Web({ searchParams }: Props) {
    const file = await fs.readFile(process.cwd() + '/app/data/web.json', 'utf8');
    const data = JSON.parse(file) as LearningPlan;
    let month = await searchParams
    const m = parseInt(month.m!); 
    return <Generate learningPlan={data} defaultMonth={m || 1} />
}