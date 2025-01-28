import type { Metadata } from "next";
import Sidebar from "../components/sidebar";

export const generateMetadata = (): Metadata => {
  return {
    title: "Beyond One Semester",
    description: "Collection of miscellaneous resources.",
    twitter: {
      card: 'summary_large_image',
      title: 'Beyond One Semester',
      description: 'Collection of miscellaneous resources.',
      images: ['https://i.imgur.com/wPZN4AU.png'],
    },
    openGraph: {
      siteName: "One Semester",
      title: 'Beyond One Semester',
      description: 'Collection of miscellaneous resources.',
      images: [
        {
          url: 'https://i.imgur.com/wPZN4AU.png',
          width: 800,
          height: 600,
        },
        {
          url: 'https://i.imgur.com/wPZN4AU.png',
          width: 1800,
          height: 1600,
          alt: 'One Semester Programming Roadmaps',
        },
      ],
    }
  }
}

export default function Beyond() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center relative">
      <div className="flex w-full md:w-1/2 py-16">
        <Sidebar />
        <main className="flex-1 p-0 md:p-0 w-full md:pl-0 border-l border-neutral-700 ">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 px-4 pt-2">Beyond One Semester</h1>
          <p className="text-2xl px-4">These are list of some resources to go beyond. These topics are outside the scope of one semester and might take a lot of time to even get comfortable.</p>
          <p className="text-2xl px-4 text-emerald-400">Data structures and Algorithms</p>
					<ul className="list-disc text-2xl ml-4 px-4 py-2">
						<li>CSES <a href="https://cses.fi/book/book.pdf" className="text-emerald-400 underline underline-offset-4">Handbook</a></li>
						<li>Neetcode's <a href="https://neetcode.io/roadmap" className="text-emerald-400 underline underline-offset-4">roadmap</a></li>
						<li>Primeagen's <a href="https://frontendmasters.com/courses/algorithms/" className="text-emerald-400 underline underline-offset-4">free course</a> on algorithms</li>
						<li><a href="https://www.oreilly.com/library/view/algorithms-in-a/9780596516246/" className="text-emerald-400 underline underline-offset-4">Algorithms in a Nutshell</a> by George T Heineman</li>
						<li>CSES <a href="https://cses.fi/problemset/" className="text-emerald-400 underline underline-offset-4">problem set</a></li>
					</ul>
          <p className="text-2xl px-4 text-emerald-400 mt-4">Extended Web Dev</p>
					<ul className="list-disc text-2xl ml-4 px-4 py-2">
            <li>Holy grail of <a href="https://developer.mozilla.org/en-US/" className="text-emerald-400 underline underline-offset-4">MDN docs</a></li>
						<li>Freecodecamp's <a href="https://www.freecodecamp.org/news/the-php-handbook/" className="text-emerald-400 underline underline-offset-4">php handbook</a></li>
						<li><a href="https://www.youtube.com/watch?v=SqTdHCTWqks" className="text-emerald-400 underline underline-offset-4">8 hour laravel course</a> by Laracasts</li>
						<li><a href="https://www.youtube.com/playlist?list=PL-osiE80TeTs4UjLw5MM6OjgkjFeUxCYH" className="text-emerald-400 underline underline-offset-4">Flask video series</a> by Corey Schafer</li>
						<li><a href="https://www.youtube.com/playlist?list=PL-osiE80TeTtoQCKZ03TU5fNfx2UY6U4p" className="text-emerald-400 underline underline-offset-4">Django video series</a> by Corey Schafer</li>
						<li><a href="https://www.youtube.com/watch?v=7t2alSnE2-I" className="text-emerald-400 underline underline-offset-4">Fastapi video</a> by Bitfumes</li>
						</ul>
          <p className="text-2xl px-4 text-emerald-400 mt-4">Deeper Into Networks</p>
					<ul className="list-disc text-2xl ml-4 px-4 py-2">
						<li>Beej's <a href="https://beej.us/guide/bgnet0/" className="text-emerald-400 underline underline-offset-4">Guide</a> to Networking Concepts</li>
						<li>Beej's <a href="https://beej.us/guide/bgnet/" className="text-emerald-400 underline underline-offset-4">Guide</a> to Network Programming</li>
            <li>Profressor Messer's <a href="https://www.youtube.com/@professormesser" className="text-emerald-400 underline underline-offset-4">youtube channel</a></li>
					</ul>
          <p className="text-2xl px-4 text-emerald-400 mt-4">Functional Programming</p>
					<ul className="list-disc text-2xl ml-4 px-4 py-2">
						<li><a href="https://learnyouahaskell.com/introduction" className="text-emerald-400 underline underline-offset-4">Learn</a> you a haskell</li>
						<li><a href="https://www.youtube.com/playlist?list=PLe7Ei6viL6jGp1Rfu0dil1JH1SHk9bgDV" className="text-emerald-400 underline underline-offset-4">Haskell for Imperative Programmers</a> Playlist by Phillip Hagenlocher</li>
					</ul>
          <p className="text-2xl px-4 text-emerald-400 mt-4">Graphics Libraries</p>
					<ul className="list-disc text-2xl ml-4 px-4 py-2">
						<li>Raylib <a href="https://www.raylib.com/cheatsheet/cheatsheet.html" className="text-emerald-400 underline underline-offset-4">Cheatsheet</a></li>
						<li>Raylib <a href="https://github.com/raysan5/raylib-intro-course" className="text-emerald-400 underline underline-offset-4">Introductory Course</a></li>
            <li><a href="https://www.youtube.com/watch?v=8OMghdHP-zs" className="text-emerald-400 underline underline-offset-4">Pygame Course</a> by Clear Code</li>
            <li><a href="https://www.youtube.com/watch?v=keRIiXJoQP8&list=PLs6oRBoE2-Q_fX_rzraQekRoL7Kr7s5xi&index=2" className="text-emerald-400 underline underline-offset-4">SFML and C++ Course</a> by Mustafa Sibai </li>
            <li><a href="https://guide.handmadehero.org/" className="text-emerald-400 underline underline-offset-4">Handmade Hero</a> by Casey Muratori</li>
            <li><a href="https://www.youtube.com/watch?v=KsG6dJlLBDw&list=PL2RPjWnJduNmXHRYwdtublIPdlqocBoLS&index=1" className="text-emerald-400 underline underline-offset-4">SDL2 with CPP RPG game</a> by codergopher</li>
					</ul>
          <p className="text-2xl px-4 text-emerald-400 mt-4">Good From Scratch Projects</p>
					<ul className="list-disc mb-12 text-2xl ml-4 px-4 py-2">
						<li><a href="https://drive.google.com/file/d/17TJP4TNKxS0cqK23lUmAJJ6xR_iXYGUS/view" className="text-emerald-400 underline underline-offset-4">Building bitcoin in rust</a> by Lukas Hozda</li>
						<li><a href="https://interpreterbook.com/" className="text-emerald-400 underline underline-offset-4">Writing Interpreter in Go</a> by Thorsten Ball</li>
						<li><a href="https://viewsourcecode.org/snaptoken/kilo/" className="text-emerald-400 underline underline-offset-4">Build your own text editor</a> by snaptoken</li>
						<li><a href="https://build-your-own.org/redis/" className="text-emerald-400 underline underline-offset-4">Build your own redis</a> by James Smith</li>
            <li><a href="https://brennan.io/2015/01/16/write-a-shell-in-c/" className="text-emerald-400 underline underline-offset-4">Write a shell in C</a> by Stephen Brennan</li>
					</ul>
        </main>
      </div>
    </div>
  );
}
