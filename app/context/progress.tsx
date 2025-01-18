import React, { createContext, useContext, useState, useEffect } from 'react';

interface TaskProgress {
  monthId: number;
  weekId?: number | null;
  taskIndex: number;
  completed: boolean;
}

interface ProgressContextType {
  progress: TaskProgress[];
  toggleTask: (monthId: number, weekId: number | null | undefined, taskIndex: number) => void;
  isTaskComplete: (monthId: number, weekId: number | null | undefined, taskIndex: number) => boolean;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export function ProgressProvider({ 
  children, 
  roadmapId 
}: { 
  children: React.ReactNode;
  roadmapId: string;
}) {
  const [progress, setProgress] = useState<TaskProgress[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const loadProgress = () => {
      try {
        const saved = localStorage.getItem(`roadmap-progress-${roadmapId}`);
        const initialProgress = saved ? JSON.parse(saved) : [];
        setProgress(initialProgress);
      } catch (error) {
        console.error('Error loading progress:', error);
        setProgress([]);
      }
      setIsInitialized(true);
    };

    loadProgress();
  }, [roadmapId]);

  const saveProgress = (newProgress: TaskProgress[]) => {
    try {
      localStorage.setItem(`roadmap-progress-${roadmapId}`, JSON.stringify(newProgress));
    } catch (error) {
      console.error('Error saving progress:', error);
    }
  };

  const toggleTask = (monthId: number, weekId: number | null | undefined, taskIndex: number) => {
    setProgress(prevProgress => {
      const existing = prevProgress.find(p => 
        p.monthId === monthId && 
        p.weekId === weekId && 
        p.taskIndex === taskIndex
      );

      let newProgress;
      if (existing) {
        // Toggle existing task
        newProgress = prevProgress.map(p => 
          p.monthId === monthId && p.weekId === weekId && p.taskIndex === taskIndex
            ? { ...p, completed: !p.completed }
            : p
        );
      } else {
        // Add new task
        newProgress = [...prevProgress, {
          monthId,
          weekId,
          taskIndex,
          completed: true
        }];
      }

      // Save immediately
      saveProgress(newProgress);
      return newProgress;
    });
  };

  const isTaskComplete = (monthId: number, weekId: number | null | undefined, taskIndex: number): boolean => {
    return progress.some(p => 
      p.monthId === monthId && 
      p.weekId === weekId && 
      p.taskIndex === taskIndex && 
      p.completed
    );
  };

  if (!isInitialized) {
    return null;
  }

  return (
    <ProgressContext.Provider value={{ progress, toggleTask, isTaskComplete }}>
      {children}
    </ProgressContext.Provider>
  );
}

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (context === undefined) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};
