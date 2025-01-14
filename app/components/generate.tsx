"use client";
import { useState } from 'react';
import { TaskComponent } from './task';

const Generate = ({ learningPlan }: { learningPlan: LearningPlan }) => {
    const [selectedMonth, setSelectedMonth] = useState<number>(1);
    const [expandedMonth, setExpandedMonth] = useState<number | null>(1);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const scrollToWeek = (weekId: string) => {
        const element = document.getElementById(weekId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        // Close sidebar on mobile after navigation
        setIsSidebarOpen(false);
    };

    return (
        <div className="flex flex-col min-h-screen items-center justify-center relative">
            {/* Mobile Toggle Button */}
            <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="fixed top-4 right-4 z-50 md:hidden bg-emerald-700 text-white p-2 px-4"
            >
                {isSidebarOpen ? '✕' : '☰'}
            </button>

            <div className="flex w-full md:w-1/2 py-16">
                {/* Sidebar with mobile responsive styles */}
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
                    {learningPlan.months.map((month) => (
                        <div key={month.month}>
                            <button
                                onClick={() => {
                                    setSelectedMonth(month.month);
                                    setExpandedMonth(expandedMonth === month.month ? null : month.month);
                                }}
                                className={`w-full text-left p-2 transition-colors ${
                                    selectedMonth === month.month
                                        ? 'bg-emerald-700 text-white'
                                        : 'bg-transparent hover:bg-neutral-800'
                                }`}
                            >
                                <div className="flex items-center justify-between">
                                    <span>Month {month.month}</span>
                                    {month.weeks && (
                                        <span className="transform text-sm transition-transform duration-200" style={{ 
                                            transform: expandedMonth === month.month ? 'rotate(180deg)' : 'rotate(0deg)'
                                        }}>
                                            ▼
                                        </span>
                                    )}
                                </div>
                            </button>
                            {expandedMonth === month.month && month.weeks && (
                                <div className="pl-4 py-1 bg-neutral-950">
                                    {month.weeks.map((week) => (
                                        <button
                                            key={week.week}
                                            onClick={() => scrollToWeek(`week-${month.month}-${week.week}`)}
                                            className="w-full text-left p-2 text-xl text-neutral-400 hover:text-emerald-700 transition-colors"
                                        >
                                            Week {week.week}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </aside>

                {/* Main content */}
                <main className="flex-1 p-0 md:p-0 w-full md:pl-0 border-l border-neutral-700 ">
                    <h1 className="text-3xl md:text-4xl font-bold mb-2 px-4 pt-2">{learningPlan.lesson}</h1>
                    <div className="flex px-4 pb-4 items-center">
                        <img src={learningPlan.author.image} alt={learningPlan.author.name} className='h-8 w-8' />
                        <p className="text-xl px-4 text-emerald-400">{learningPlan.author.name}</p>   
                        <div className="flex gap-4 items-center">
                            <a href={learningPlan.author.url} target='_blank' rel="noopener noreferrer" className="text-emerald-500 h-5 w-5 hover:text-emerald-600">
                            <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path d="M5 3h6v2H5v14h14v-6h2v8H3V3h2zm8 0h8v8h-2V7h-2V5h-4V3zm0 8h-2v2H9v2h2v-2h2v-2zm4-4h-2v2h-2v2h2V9h2V7z" fill="currentColor"/> </svg>    
                            </a>
                            {learningPlan.author.github && <a href={learningPlan.author.github} target='_blank' rel="noopener noreferrer" className="text-emerald-500 h-5 w-5 hover:text-emerald-600">
                               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path fill="currentColor" d="M5 2h4v2H7v2H5V2Zm0 10H3V6h2v6Zm2 2H5v-2h2v2Zm2 2v-2H7v2H3v-2H1v2h2v2h4v4h2v-4h2v-2H9Zm0 0v2H7v-2h2Zm6-12v2H9V4h6Zm4 2h-2V4h-2V2h4v4Zm0 6V6h2v6h-2Zm-2 2v-2h2v2h-2Zm-2 2v-2h2v2h-2Zm0 2h-2v-2h2v2Zm0 0h2v4h-2v-4Z"/> </svg> 
                                </a>}
                            {learningPlan.author.twitter && <a href={learningPlan.author.twitter} target='_blank' rel="noopener noreferrer" className="text-emerald-500 text-xl h-4 w-4 flex items-center justify-center text-center hover:text-emerald-600">
                         <p>  𝕏 </p>
                            </a>}

                        </div> 
                    </div> 
                    {learningPlan.months
                        .filter((month) => month.month === selectedMonth)
                        .map((month) => (
                            <div key={month.month} className="space-y-6">
                                {month.weeks ? (
                                    month.weeks.map((week) => (
                                        <div 
                                            key={week.week} 
                                            id={`week-${month.month}-${week.week}`}
                                            className="space-y-4 scroll-mt-16"
                                        >
                                            <h3 className="text-2xl font-medium px-4">Week {week.week} | {week.description}</h3>
                                            {week.tasks.map((task, index) => (
                                                <TaskComponent 
                                                    key={index} 
                                                    task={task} 
                                                    className="border-t-[1px] border-t-neutral-700"
                                                />
                                            ))}
                                        </div>
                                    ))
                                ) : (
                                    month.tasks && (
                                        <div className="space-y-4">
                                            {month.tasks.map((task, index) => (
                                                <TaskComponent 
                                                    key={index} 
                                                    task={task} 
                                                    className="border-t-[1px] border-t-neutral-700"
                                                />
                                            ))}
                                        </div>
                                    )
                                )}
                            </div>
                        ))}
                </main>
            </div>
        </div>
    );
};

export default Generate;