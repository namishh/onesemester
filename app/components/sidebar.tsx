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
                    w-64 md:w-48 p-2
                    text-2xl 
                    bg-neutral-950 md:bg-transparent
                    transform transition-transform duration-300 ease-in-out
                    md:translate-x-0 z-40
                    ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
                `}>

                <a href="/"
                    className={`w-full block text-left p-2 transition-color bg-transparent hover:bg-neutral-800`}
                >Home</a>
                <a href="/"
                    className={`w-full block text-left p-2 transition-color bg-transparent hover:bg-neutral-800`}
                >AI (soon)</a>
                <a href="/low"
                    className={`w-full block text-left p-2 transition-color bg-transparent hover:bg-neutral-800`}
                >C // Rust</a>
                <a href="/web"
                    className={`w-full block text-left p-2 transition-color bg-transparent hover:bg-neutral-800`}
                >Web Dev</a>
                <a href="/devops"
                    className={`w-full block text-left p-2 transition-color bg-transparent hover:bg-neutral-800`}
                >DevOps</a>
            </aside>
        </>
    );
}