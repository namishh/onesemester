"use client";
import { useState } from 'react';

const Accordion = ({ title, children }: { title: string; children: React.ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-emerald-500">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex w-full justify-between items-center py-4 px-2 transition-colors"
            >
                <span className="font-medium">{title}</span>
                <span className="transform transition-transform duration-200" style={{
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                }}>
                    ▼
                </span>
            </button>
            <div className={`overflow-hidden transition-all duration-200 ${isOpen ? 'max-h-content py-4' : 'max-h-0'}`}>
                {children}
            </div>
        </div>
    );
};

const TaskComponent = ({ task, className = "" }: { task: Task; className?: string }) => {
    const getYouTubeId = (url: string) => {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11) ? match[2] : null;
    };

    return (
        <div className={`py-4 ${className}`}>
            <h4 className="font-medium px-4 mb-2">
                <span className="text-emerald-400">##</span> {task.type.charAt(0).toUpperCase() + task.type.slice(1)}: {task.content}
            </h4>
            {task.type === "Video" && task.url && (
                <div className="px-4 mb-4">
                    <iframe
                        width="100%"
                        height="315"
                        src={`https://www.youtube.com/embed/${getYouTubeId(task.url)}`}
                        title={task.content}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="mb-4"
                    />
                    <a
                        href={task.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-600 hover:text-emerald-800 underline"
                    >
                        Open in YouTube
                    </a>
                </div>
            )}
            {task.type !== "Video" && task.url && (
                <a
                    href={task.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 text-emerald-600 hover:text-emerald-800 underline"
                >
                    Learn more
                </a>
            )}
            {task.image && (
                <img
                    src={task.image}
                    alt={task.content}
                    className="p-4"
                />
            )}
            {task.images && task.images.map((image, idx) => (
                <img
                    key={idx}
                    src={image}
                    alt={task.content}
                    className="p-4"
                />
            ))}
            {task.urls && task.urls.map((url, idx) => (
                <div key={idx} className="mt-2 p-4">
                    <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-600 hover:text-emerald-800 underline"
                    >
                        {url}
                    </a>
                </div>
            ))}
            {task.list && (
                <ul className="list-disc mt-4 pl-8 px-4 space-y-1">
                    {task.list.map((item, idx) => (
                        <li key={idx}>{item}</li>
                    ))}
                </ul>
            )}
            {task.details && (
                <div className="mt-4 px-4">
                    {task.details.features && (
                        <Accordion title="Features">
                            <ul className="list-disc pl-5 space-y-1">
                                {task.details.features.map((feature, idx) => (
                                    <li key={idx}>{feature}</li>
                                ))}
                            </ul>
                        </Accordion>
                    )}
                    {task.details.tips && (
                        <Accordion title="Tips">
                            <ul className="list-disc pl-5 space-y-1">
                                {task.details.tips.map((tip, idx) => (
                                    <li key={idx}>{tip}</li>
                                ))}
                            </ul>
                        </Accordion>
                    )}
                    {task.details.examples && (
                        <Accordion title="Examples">
                            <ul className="list-disc pl-5 space-y-1">
                                {task.details.examples.map((example, idx) => (
                                    <li key={idx}>{example}</li>
                                ))}
                            </ul>
                        </Accordion>
                    )}
                    {task.details.level && (
                        <div className="py-2">
                            <strong className="inline-block mr-2">Level:</strong>
                            <span>{task.details.level}</span>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

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
                className="fixed top-4 right-4 z-50 md:hidden bg-emerald-600 text-white p-2 px-4"
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
                                        ? 'bg-emerald-600 text-white'
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
                                            className="w-full text-left p-2 text-sm text-neutral-400 hover:text-emerald-600 transition-colors"
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
                <main className="flex-1 p-0 md:p-0 w-full md:pl-0                     border-l border-neutral-800 ">
                    <h1 className="text-2xl md:text-3xl font-bold mb-6 p-3">{learningPlan.lesson}</h1>
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
                                            <h3 className="text-xl font-medium p-3">Week {week.week}</h3>
                                            {week.tasks.map((task, index) => (
                                                <TaskComponent 
                                                    key={index} 
                                                    task={task} 
                                                    className="border-t-[1px] border-t-neutral-800"
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