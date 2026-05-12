export const TASKS_KEY = "tasks";

export const TaskState = {
  Creating: 'creating',
  Created: 'created',
} as const;

export type TaskStateValues = typeof TaskState[keyof typeof TaskState];


export interface Task {
  id: string;
  title: string;
  concluded?: boolean;
  state?: TaskStateValues;
}