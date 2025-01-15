import type { Metadata } from "next";
import Sidebar from "./components/sidebar";

export const generateMetadata = (): Metadata => {
  return {
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
  }
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center relative">
      <div className="flex w-full md:w-1/2 py-16">
        <Sidebar />
        <main className="flex-1 p-0 md:p-0 w-full md:pl-0 border-l border-neutral-700 ">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 px-4 pt-2">One Semester Is All You Need</h1>
          <p className="text-2xl px-4 text-emerald-400">Who is this for?</p>
          <p className="text-2xl px-4 py-2">These roadmaps are mainly targetted towards beginners who are right now in college, to get them started quickly. This is NOT for people who want to go deep on these topics.</p>
          <p className="text-2xl px-4 text-emerald-400">How do I use this?</p>

          <p className="text-2xl px-4 py-2">You are given a specific list of tasks to complete and resources to study from for each month. We have picked them in such a way that you should not need any more resources to unnecessarily be stuck in <span className="text-emerald-400">tutorial hell.</span> You are not expected to code for more than <span className="text-emerald-400">3-5 hours a day.</span> </p>
          <p className="text-2xl px-4 text-emerald-400">A guide to make projects</p>
          <p className="text-2xl px-4 py-2">Approach projects like it they would be in a production environment. Research as to how they are implemented and try to replicate it. Most of the time you will have to learn a new framework or library.</p>
          <p className="text-2xl px-4 text-emerald-400">Should I use AI?</p>
          <p className="text-2xl px-4 py-2">Yes and No. Do not use AI as the driving seat of your learning // project making. Use it to consult and ask how the underlying things work and clearing up concepts.</p> 
          <p className="text-2xl px-4 text-emerald-400">Contact</p>
          <p className="text-2xl px-4 py-2">Shoot us a mail at <a className="text-emerald-400 underline underline-offset-4" href="mailto:contact@onesemester.tech">contact@onesemester.tech</a></p>
        </main>
      </div>
    </div>
  );
}
