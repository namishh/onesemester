export const calculateTotalTasks = (learningPlan: LearningPlan): number => {
  let totalTasks = 0;

  for (const month of learningPlan.months) {
    if (month.weeks) {
      for (const week of month.weeks) {
        totalTasks += week.tasks.length;
      }
    }

    if (month.tasks) {
      totalTasks += month.tasks.length;
    }
  }

  return totalTasks;
}