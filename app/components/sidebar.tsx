"use client";
import { useState } from "react";

export default function Sidebar() {

	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	return (

		<>

			<button
				onClick={() => setIsSidebarOpen(!isSidebarOpen)}
				className="fixed top-4 right-4 z-50 md:hidden bg-emerald-700 text-white p-2 px-4"
			>
				{isSidebarOpen ? '✕' : '☰'}
			</button>

			<aside className={`
                fixed md:relative top-0 left-0 h-full 
                w-64 md:w-48
                text-2xl 
                bg-neutral-950 md:bg-transparent
                transform transition-transform duration-300 ease-in-out
                md:translate-x-0 z-40
                ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
            `}>
				<a href="/"
					className="w-full block text-left px-4 py-2 transition-color bg-transparent hover:bg-neutral-800"
				>
					Home
				</a>
				<a href="/"
					className="w-full block text-left  px-4 py-2 transition-color bg-transparent hover:bg-neutral-800"
				>
					AI (soon)
				</a>
				<a href="/low"
					className="w-full block text-left  px-4 py-2 transition-color bg-transparent hover:bg-neutral-800"
				>
					C // Rust
				</a>
				<a href="/devops"
					className="w-full block text-left  px-4 py-2 transition-color bg-transparent hover:bg-neutral-800"
				>
					DevOps
				</a>
				<a href="/dsa"
					className="w-full block text-left  px-4 py-2 transition-color bg-transparent hover:bg-neutral-800"
				>
					Practical DSA
				</a>
				<a href="/web"
					className="w-full block text-left  px-4 py-2 transition-color bg-transparent hover:bg-neutral-800"
				>
					Web Dev
				</a>
				<a href="/beyond"
					className="w-full block border-t-[1px] border-neutral-700 text-left  px-4 py-2 transition-color bg-transparent hover:bg-neutral-800"
				>
					Beyond
				</a>
				<a href="https://github.com/namishh/semester"
					className="w-full block text-left  px-4 py-2 transition-color bg-transparent hover:bg-neutral-800"
				>
					Github
				</a>
			</aside>
		</>
	);
};
