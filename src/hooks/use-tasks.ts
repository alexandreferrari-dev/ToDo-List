import _useLocalStorage from 'use-local-storage';
import { TASKS_KEY, type Task } from '../models/task';

// Vite 8 CJS interop: export default retorna { __esModule: true, default: fn }
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useLocalStorage = (_useLocalStorage as any).default as typeof _useLocalStorage;

export default function useTasks() {
  const [tasks] = useLocalStorage<Task[]>(TASKS_KEY, []);

  return {
    tasks,
    tasksCount: tasks.length,
    concludedTasksCount: tasks.filter((task) => task.concluded).length
  }
}