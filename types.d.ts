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
  week: number;
  description: string;
  tasks: Task[];
}

interface Month {
  month: number;
  weeks?: Week[];
  tasks?: Task[];
}

interface Author {
    name : string;
    url : string;
    github? : string;
    twitter?: string;
    image : string;
}

interface LearningPlan { 
  author: Author; 
  lesson: string;
  months: Month[];
}