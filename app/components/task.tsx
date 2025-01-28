import React, { useState, useCallback, memo } from 'react';
import Image from 'next/image';
import { useProgress } from '../context/progress';
import { Accordion } from "./accordian";

interface TaskComponentProps {
  task: Task;
  className?: string;
  monthId: number;
  weekId?: number | null;
  taskIndex: number;
}

const TaskComponent = memo(({ 
  task, 
  className = "", 
  monthId,
  weekId,
  taskIndex 
}: TaskComponentProps) => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const { isTaskComplete, toggleTask } = useProgress();
  
  const completed = isTaskComplete(monthId, weekId, taskIndex);

  const getYouTubeId = useCallback((url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  }, []);

  const youTubeId = task.url ? getYouTubeId(task.url) : null;
  const thumbnailUrl = youTubeId ? `https://img.youtube.com/vi/${youTubeId}/hqdefault.jpg` : null;

  const handleCheckboxChange = useCallback(() => {
    toggleTask(monthId, weekId, taskIndex);
  }, [monthId, weekId, taskIndex, toggleTask]);

  return (
    <div className={`py-4 ${className} text-[22px]`}>
      <div className="flex items-center px-4 mb-2">
        <input
          type="checkbox"
          checked={completed}
          onChange={handleCheckboxChange}
          id={`task-${monthId}-${weekId}-${taskIndex}`}
          className="hidden"
        />
        <label
          htmlFor={`task-${monthId}-${weekId}-${taskIndex}`}
          className="cursor-pointer mr-4"
        >
          {completed ? (
            <svg className="text-emerald-500 h-6 w-6" viewBox="0 0 24 24">
              <path d="M5 3H3v18h18V3H5zm0 2h14v14H5V5zm4 7H7v2h2v2h2v-2h2v-2h2v-2h2V8h-2v2h-2v2h-2v2H9v-2z" 
                fill="currentColor"/>
            </svg>
          ) : (
            <svg className="text-neutral-400 h-6 w-6" viewBox="0 0 24 24">
              <path d="M3 3h18v18H3V3zm16 16V5H5v14h14z" fill="currentColor"/>
            </svg>
          )}
        </label>
        <h4 className="font-medium">
          {task.type.charAt(0).toUpperCase() + task.type.slice(1)}: {task.content}
        </h4>
      </div>

      {task.type === "Video" && task.url && (
        <div className="px-4 mb-4">
          {videoLoaded ? (
            <iframe
              width="100%"
              height="260"
              loading="lazy"
              src={`https://www.youtube.com/embed/${youTubeId}?autoplay=1`}
              title={task.content}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="mb-4 aspect-video"
            />
          ) : (
            <div 
              className="relative bg-neutral-800 aspect-video w-full overflow-hidden cursor-pointer"
              onClick={() => setVideoLoaded(true)}
              role="button"
              aria-label="Load video"
            >
              {thumbnailUrl && (
                <Image
                  src={thumbnailUrl}
                  alt="Video thumbnail"
                  fill
                  className="object-cover opacity-50"
                  loading="lazy"
                  quality={30}
                  sizes="(max-width: 768px) 100vw, 70vw"
                />
              )}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="text-white text-4xl hover:text-emerald-500 transition-colors">
                  ▶
                </button>
              </div>
            </div>
          )}
          <a
            href={task.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block text-emerald-500 hover:text-emerald-600 underline"
          >
            Open in YouTube
          </a>
        </div>
      )}

      {task.type !== "Video" && task.url && (
        <div className="px-4 mb-4">
          <a
            href={task.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-500 hover:text-emerald-600 underline break-words"
          >
            {new URL(task.url).hostname + new URL(task.url).pathname}
          </a>
        </div>
      )}

      {task.image && (
  <div className="relative w-full aspect-video">
    <Image
      src={`${task.image}`}
      alt={task.content}
      fill
      className="object-contain p-4"
      quality={60}
      sizes="(max-width: 768px) 100vw, 70vw"
    />
  </div>
      )}

      {task.images && task.images.map((image, idx) => (
        <div key={idx} className="relative w-full h-64 my-4">
          <Image
            src={image}
            alt={`${task.content} - Example ${idx + 1}`}
            fill
            className="object-contain p-4"
            loading="lazy"
            quality={60}
            sizes="(max-width: 768px) 100vw, 70vw"
          />
        </div>
      ))}

      {task.urls && task.urls.map((url, idx) => (
        <div key={idx} className="mt-4 px-4">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-500 hover:text-emerald-600 underline break-words"
          >
            {new URL(url).hostname + new URL(url).pathname}
          </a>
        </div>
      ))}

      {task.list && (
        <ul className="list-disc mt-4 pl-8 px-4 space-y-2">
          {task.list.map((item, idx) => (
            <li key={idx} className="break-words">{item}</li>
          ))}
        </ul>
      )}

      {task.details && (
        <div className="mt-4 px-4">
          {task.details.features && (
            <Accordion title="Features">
              <ul className="list-disc pl-5 space-y-2">
                {task.details.features.map((feature, idx) => (
                  <li key={idx} className="break-words">{feature}</li>
                ))}
              </ul>
            </Accordion>
          )}

          {task.details.tips && (
            <Accordion title="Tips">
              <ul className="list-disc pl-5 space-y-2">
                {task.details.tips.map((tip, idx) => (
                  <li key={idx} className="break-words">{tip}</li>
                ))}
              </ul>
            </Accordion>
          )}

          {task.details.examples && (
            <Accordion title="Examples">
              <div className="flex flex-col space-y-2">
                {task.details.examples.map((example, idx) => (
                  <a
                    key={idx}
                    href={example}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-500 hover:text-emerald-600 underline break-words"
                  >
                    {new URL(example).hostname + new URL(example).pathname}
                  </a>
                ))}
              </div>
            </Accordion>
          )}

          {task.details.level && (
            <div className="py-2">
              <span className="font-medium mr-2">Level:</span>
              <span className="text-emerald-500">{task.details.level}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
});

TaskComponent.displayName = 'TaskComponent';

export { TaskComponent };