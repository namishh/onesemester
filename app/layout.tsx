import type { Metadata } from "next";
import "./globals.css";
import SearchBar from "./components/search";

export const metadata: Metadata = {
  title: "One Semester Is All You Need",
  description: "Learn programming in one semester with structured roadmaps",
  twitter: {
    card: 'summary_large_image',
    title: 'One Semester Is All You Need',
    description: 'Learn programming in one semester with structured roadmaps',
    images: ['https://i.imgur.com/oqu9P9j.png'],
  },
  openGraph: {
    siteName: "One Semester",
    title: 'One Semester Is All You Need',
    description: 'Learn programming in one semester with structured roadmaps',
    images: [
      {
        url: 'https://i.imgur.com/oqu9P9j.png',
        width: 800,
        height: 600,
      },
      {
        url: 'https://i.imgur.com/oqu9P9j.png',
        width: 1800,
        height: 1600,
        alt: 'One Semester Programming Roadmaps',
      },
    ],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased crt bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_60%,transparent_100%)]`}
      >
        {children}
        <SearchBar/>
      </body>
    </html>
  );
}
