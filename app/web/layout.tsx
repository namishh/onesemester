import type { Metadata } from "next";

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
        alt: 'Web Development Roadmap Preview',
      },
    ],
  }
};

export default function WebLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 