interface Task {
  type: string;
  content: string;
  url?: string;
  urls?: string[];
  list?: string[];
  images?: string[];  
  image?: string;
  details?: {
    features?: string[];
    tips?: string[];
    examples?: string[];
    level?: string;
  };
}

interface Week {
  week: number | string;
  description: string;
  tasks: Task[];
}

interface Month {
  month: number;
  weeks?: Week[];
  tasks?: Task[];
}

interface LearningPlan {
  lesson: string;
  months: Month[];
}