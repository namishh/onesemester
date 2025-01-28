import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Practical DSA",
  description: "Learn DSA by making actual projects",
  twitter: {
    card: 'summary_large_image',
    title: 'Practical DSA',
    description: 'Learn DSA by making actual projects',
    images: ['https://i.imgur.com/Jxz5y0o.png'],
  },
  openGraph: {
    siteName: "One Semester",
    title: 'Practical DSA',
    description: 'Learn DSA by making actual projects',
    images: [
      {
        url: 'https://i.imgur.com/Jxz5y0o.png',
        width: 800,
        height: 600,
      },
      {
        url: 'https://i.imgur.com/Jxz5y0o.png',
        width: 1800,
        height: 1600,
        alt: 'Practical DSA Preview',
      },
    ],
  }
};

export default function DSALayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 