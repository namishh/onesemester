import { Accordion } from "./accordian";

export const TaskComponent = ({ task, className = "" }: { task: Task; className?: string }) => {
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
                        className="text-emerald-700 hover:text-emerald-800 underline"
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
                    className="px-4 text-emerald-700 hover:text-emerald-800 underline"
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
                        className="text-emerald-700 hover:text-emerald-800 underline"
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
