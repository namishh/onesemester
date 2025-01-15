import { Metadata } from "next";
import Generate from "../components/generate";

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
    const response = await fetch(process.env.NEXT_PUBLIC_URL! + '/data/web.json');
    console.log(response)
    const data: LearningPlan = await response.json();
    let month = await searchParams
    const m = parseInt(month.m!);
    return <Generate learningPlan={data} defaultMonth={m || 1} />
}
export const dynamic = 'force-static'