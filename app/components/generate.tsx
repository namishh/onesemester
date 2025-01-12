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
                    bg-neutral-950 md:bg-transparent
                    transform transition-transform duration-300 ease-in-out
                    md:translate-x-0 z-40
                    ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
                `}>
                    
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
                                        : 'bg-transparent hover:bg-neutral-100'
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
                                            className="w-full text-left p-2 text-sm text-neutral-400 hover:text-emerald-700 transition-colors"
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
                    <h1 className="text-2xl md:text-3xl font-bold mb-2 px-4 pt-2">{learningPlan.lesson}</h1>

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
                                            <h3 className="text-xl font-medium px-4">Week {week.week} | {week.description}</h3>
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
                                                    className="border p-4 bg-white shadow-sm"
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