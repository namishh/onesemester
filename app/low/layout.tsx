import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Low-Level Programming Roadmap",
  description: "Systems programming and low-level development",
  twitter: {
    card: 'summary_large_image',
    title: 'Low-Level Programming Roadmap',
    description: 'Systems programming and low-level development',
    images: ['https://i.imgur.com/BwGG7Ch.png'],
  },
  openGraph: {
    siteName: "One Semester",
    title: 'Low-Level Programming Roadmap',
    description: 'Systems programming and low-level development',
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
        alt: 'Low-Level Programming Roadmap Preview',
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