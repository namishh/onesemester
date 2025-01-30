import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI // ML",
  description: "Learn AI // ML",
  twitter: {
    card: 'summary_large_image',
    title: 'AI // ML',
    description: 'Learn AI // ML',
    images: ['https://i.imgur.com/KnN0ZPb.png'],
  },
  openGraph: {
    siteName: "One Semester",
    title: 'AI // ML',
    description: 'Learn AI // ML',
    images: [
      {
        url: 'https://i.imgur.com/KnN0ZPb.png',
        width: 800,
        height: 600,
      },
      {
        url: 'https://i.imgur.com/KnN0ZPb.png',
        width: 1800,
        height: 1600,
        alt: 'AI // ML Preview',
      },
    ],
  }
};

export default function AILayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 