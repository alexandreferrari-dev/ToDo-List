import _useLocalStorage from 'use-local-storage';
import { TASKS_KEY, type Task, TaskState } from '../models/task';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useLocalStorage = (_useLocalStorage as any).default as typeof _useLocalStorage;

export default function useTask() {
  const [tasks, setTasks] = useLocalStorage<Task[]>(TASKS_KEY, []);

  function prepareTask() {
    setTasks([...tasks, {
      id: Math.random().toString(36).substring(2, 9), 
      title: "", 
      state: TaskState.Creating
    }])
  }
  return {
    prepareTask,
  }
}