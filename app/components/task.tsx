import { useCallback } from "react";
import { useProgress } from '../context/progress';
import { Accordion } from "./accordian";
import Image from 'next/image'


export const TaskComponent = ({ task, className = "", monthId,
    weekId,
    taskIndex }: {
        task: Task; className?: string, monthId: number;
        weekId?: number | null;
        taskIndex: number;
    }) => {
    const getYouTubeId = (url: string) => {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11) ? match[2] : null;
    };

    const { isTaskComplete, toggleTask } = useProgress();
    const completed = isTaskComplete(monthId, weekId, taskIndex);
  
    const handleCheckboxChange = () => {
      toggleTask(monthId, weekId, taskIndex);
    };
  

    return (
        <div className={`py-4 ${className} text-[22px]`}>

            <input
                type="checkbox"
                checked={completed}
                onChange={handleCheckboxChange}
                hidden
                name={`task-${monthId}-${weekId}-${taskIndex}`}
                key={`${monthId}-${weekId}-${taskIndex}-${completed}`}
                id={`task-${monthId}-${weekId}-${taskIndex}`}
            />



            <h4 className="font-medium flex px-4 mb-2 items-center">
            <label
                htmlFor={`task-${monthId}-${weekId}-${taskIndex}`}
                className="inline mr-4"
            >
                {completed ? <svg fill="none" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer text-emerald-500 h-6 w-6" viewBox="0 0 24 24"> <path d="M5 3H3v18h18V3H5zm0 2h14v14H5V5zm4 7H7v2h2v2h2v-2h2v-2h2v-2h2V8h-2v2h-2v2h-2v2H9v-2z" fill="currentColor"/> </svg> : <svg fill="none" xmlns="http://www.w3.org/2000/svg" className="text-neutral-400 h-6 w-6 cursor-pointer" viewBox="0 0 24 24"> <path d="M3 3h18v18H3V3zm16 16V5H5v14h14z" fill="currentColor"/> </svg>}
            </label>
            <span>
               {task.type.charAt(0).toUpperCase() + task.type.slice(1)}: {task.content}
               </span>
            </h4>
            {task.type === "Video" && task.url && (
                <div className="px-4 mb-4">
                    <iframe
                        width="100%"
                        height="315"
                        loading="lazy"
                        src={`https://www.youtube.com/embed/${getYouTubeId(task.url)}`}
                        title={task.content}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="mb-4"
                    />
                    <a
                        href={task.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-500 hover:text-emerald-600 underline"
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
                    className="px-4 text-emerald-500 text-wrap break-words hover:text-emerald-600 underline"
                >
                    {task.url.length > 30 ? task.url.slice(0, 30) + '...' : task.url}
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
                <Image
                    key={idx}
                    src={image}
                    loading="lazy"
                    alt={task.content}
                    className="p-4"
                    quality={50}
                    fill
                />
            ))}
            {task.urls && task.urls.map((url, idx) => (
                <div key={idx} className="mt-4 px-4">
                    <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-500 text-wrap break-words hover:text-emerald-600 underline"
                    >
                        {url.length > 30 ? url.slice(0, 30) + '...' : url}
                    </a>
                </div>
            ))}
            {task.list && (
                <ul className="list-disc mt-4 text-wrap break-words	pl-8 px-4 space-y-1">
                    {task.list.map((item, idx) => (
                        <li key={idx}>{item}</li>
                    ))}
                </ul>
            )}
            {task.details && (
                <div className="mt-4 px-4">
                    {task.details.features && (
                        <Accordion title="Features">
                            <ul className="list-disc break-words pl-5 space-y-1">
                                {task.details.features.map((feature, idx) => (
                                    <li key={idx}>{feature}</li>
                                ))}
                            </ul>
                        </Accordion>
                    )}
                    {task.details.tips && (
                        <Accordion title="Tips">
                            <ul className="list-disc break-words pl-5 space-y-1">
                                {task.details.tips.map((tip, idx) => (
                                    <li key={idx}>{tip}</li>
                                ))}
                            </ul>
                        </Accordion>
                    )}
                    {task.details.examples && (
                        <Accordion title="Examples">
                            <ul className="list-disc break-words flex flex-col pl-5 space-y-1">
                                {task.details.examples.map((example, idx) => (
                                    <a className="text-emerald-500 text-wrap hover:text-emerald-600 underline" key={idx} href={example} target="_blank" rel="noopener noreferrer">{example.length > 30 ? example.slice(0, 30) + '...' : example}</a>
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
