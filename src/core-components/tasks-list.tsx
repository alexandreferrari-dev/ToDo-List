import PlusIcon from '../assets/icons/Plus-Regular.svg?react';
import TaskItem from './task-item';
import Button from '../components/button';
import useTasks from '../hooks/use-tasks';



export default function TasksList() {
  const { tasks } = useTasks();

  console.log(tasks);

  return (
    <>
      <section>
        <Button icon={PlusIcon} className="w-full">Nova tarefa</Button>
      </section>
      <section className="space-y-2">
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
      </section>
    </>
  );
}