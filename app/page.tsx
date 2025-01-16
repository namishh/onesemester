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
          <p className="text-2xl px-4 text-emerald-400">A guide to making projects</p>
          <p className="text-2xl px-4 py-2">The projects may feel overwhelming at first because they are meant to challenge you and push your boundaries — this is where real learning happens. <br /> Study how things are implemented in <span className="text-emerald-400"> real production environments </span>, and strive to make your project production-grade. Write clean, efficient code, <span className="text-emerald-400"> prioritize scalability and usability </span>, and document your work thoroughly. <br /> The goal of making a project is not to make it a filler on your resume, but to grow through the effort you put into researching, problem-solving, and refining your work.</p>
          <p className="text-2xl px-4 text-emerald-400">Should I use AI?</p>
          <p className="text-2xl px-4 py-2">Yes and No. Use AI as a tool to understand how things work, skim through documentation faster, or grasp what happens under the hood. It’s excellent for answering the <span className="text-emerald-400">what and why </span>, helping you build a strong conceptual foundation.<br/> However, don’t let AI become your driver or the only thing that writes code for you. Avoid relying on it for the <span className="text-emerald-400">how</span>.<br/>
           Use AI to enhance your understanding, but take the wheel when it comes to implementation. Balance is key: let AI guide your learning, but ensure you’re the one doing the work and growing your skills.

            </p> 
          <p className="text-2xl px-4 text-emerald-400">Contact</p>
          <p className="text-2xl px-4 py-2 mb-6">Shoot us a mail at <a className="text-emerald-400 underline underline-offset-4" href="mailto:contact@onesemester.tech">contact@onesemester.tech</a></p>
        </main>
      </div>
    </div>
  );
}
