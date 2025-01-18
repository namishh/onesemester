import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Devops and Systems Design Roadmap",
  description: "All about Devops and Systems design",
  twitter: {
    card: 'summary_large_image',
    title: 'Devops and Systems Design Roadmap',
    description: 'All about Devops and Systems design',
    images: ['https://i.imgur.com/AjiMYsf.png'],
  },
  openGraph: {
    siteName: "One Semester",
    title: 'Devops and Systems Design Roadmap',
    description: 'All about Devops and Systems design',
    images: [
      {
        url: 'https://i.imgur.com/AjiMYsf.png',
        width: 800,
        height: 600,
      },
      {
        url: 'https://i.imgur.com/AjiMYsf.png',
        width: 1800,
        height: 1600,
        alt: 'Devops and Systems Design Roadmap Preview',
      },
    ],
  }
};

export default function LowLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 