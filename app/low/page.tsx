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


type Props = {
    searchParams: Promise<{ m?: string }>
}

export default async function Low({ searchParams }: Props) {
    const response = await fetch(process.env.NEXT_PUBLIC_URL! + '/data/low.json');
    const data: LearningPlan = await response.json();
    let month = await searchParams
    const m = parseInt(month.m!);
    return <Generate learningPlan={data} defaultMonth={m || 1} />
}
export const dynamic = 'force-static'