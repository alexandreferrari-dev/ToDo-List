export const TASKS_KEY = "tasks";

export const TaskStateValues = {
  Creating: 'creating',
  Created: 'created',
} as const;

export type TaskState = typeof TaskStateValues[keyof typeof TaskStateValues];


export interface Task {
  id: string;
  title: string;
  concluded?: boolean;
  state?: TaskState;
}