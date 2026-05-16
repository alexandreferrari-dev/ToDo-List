import _useLocalStorage from 'use-local-storage';
import { TASKS_KEY, TaskState, type Task } from '../models/task';

// Vite 8 CJS interop: export default retorna { __esModule: true, default: fn }
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useLocalStorage = (_useLocalStorage as any).default as typeof _useLocalStorage;

export default function useTasks() {
  const [tasks] = useLocalStorage<Task[]>(TASKS_KEY, []);

  return {
    tasks,
    createdTasksCount: tasks.filter((task) => task.state === TaskState.Created).length,
    concludedTasksCount: tasks.filter((task) => task.concluded).length
  }
}