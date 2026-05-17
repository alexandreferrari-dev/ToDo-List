import _useLocalStorage from 'use-local-storage';
import { TASKS_KEY, TaskState, type Task } from '../models/task';
import React from 'react';
import { delay } from '../helpers/utils';

// Vite 8 CJS interop: export default retorna { __esModule: true, default: fn }
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useLocalStorage = (_useLocalStorage as any).default as typeof _useLocalStorage;

export default function useTasks() {
  const [tasksData] = useLocalStorage<Task[]>(TASKS_KEY, []);
  const [tasks, setTasks] = React.useState<Task[]>([]);
  const [isLoadingTasks, setIsloadingTasks] = React.useState(true);

  async function fetchTasks() {
    if (isLoadingTasks) {
      await delay(2000);
      setIsloadingTasks(false);
    }
      setTasks(tasksData);
  }
  React.useEffect(() => {
    fetchTasks();
  }, [tasksData]);

  return {
    tasks,
    createdTasksCount: tasks.filter((task) => task.state === TaskState.Created).length,
    concludedTasksCount: tasks.filter((task) => task.concluded).length,
    isLoadingTasks
  }
}