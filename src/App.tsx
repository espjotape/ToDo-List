import { Header } from "./components/Header/Header"
import { Input } from "./components/Input/Input";
import { TaskInfoCard } from "./components/TaskInfoCard/TaskInfoCard"
import { EmptyState } from "./components/EmptyState/EmptyState.tsx";
import { Button } from "./components/Button/Button.tsx";
import { ConfirmModal } from "./components/ConfirmModal/ConfirmModal.tsx";

import { Container, Content, TaskAction, TaskContainer } from './AppStyles';
import { Task } from "./components/Task/Task.tsx";
import { useState } from "react";
import { PlusCircle } from "@phosphor-icons/react";

export interface ITask {
  id: number
  content: string;
  isDone: boolean;
}

export function App() {
  const [newTaskContent, setNewTaskContent] = useState('');
  const [tasks, setTasks] = useState<ITask[]>([
    {
      id: 1,
      content: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
      isDone: false
    },
    {
      id: 2,
      content: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
      isDone: true
    },
  ]);
  const tasksCreated = tasks.length;
  const tasksCompleted = tasks.filter(task => task.isDone).length;
  const [taskIdToDelete, setTaskIdToDelete] = useState<number | null >(null);

  function handleToggleTaskStatus ({ id, value }: { id: number; value: boolean}) {
    const updatedTasks = tasks.map((task) => {
      if(task.id === id) {
        return {...task, isDone: value}
      }

      return{...task}
    })
    setTasks(updatedTasks)
  }

  function handleCreateTask() {
    if(newTaskContent.trim() === '') return;
  
    const newTask: ITask = {
      id: Math.random(),
      content: newTaskContent,
      isDone: false
    };

    setTasks(prevTasks => [...prevTasks, newTask]);
    setNewTaskContent('');
  }

  function handleAskDeleteTask(id: number) {
    setTaskIdToDelete(id);
  }

  function confirmDeleteTask() {
    if (taskIdToDelete !== null) {
      setTasks(prevTasks => prevTasks.filter(task => task.id !== taskIdToDelete));
      setTaskIdToDelete(null);
    }
  }

  function cancelDeleteTask() {
    setTaskIdToDelete(null);
  }


 return (
 <Container>
    {taskIdToDelete !== null && (
      <ConfirmModal 
        onConfirm={confirmDeleteTask}
        onCancel={cancelDeleteTask}
      />
    )}

   <Header/>

    <TaskContainer>
      <TaskAction>
        <Input 
        value={newTaskContent}
        onChange={(e) => setNewTaskContent(e.target.value)}
        />
        <Button onClick={handleCreateTask}>
          Criar
          <PlusCircle weight="bold" size={16} color="#f2f2f2"/>
        </Button>
      </TaskAction>

    <Content>
      <TaskInfoCard 
      tasksCreated={tasksCreated}
      tasksCompleted={tasksCompleted}
      />
      {tasks.length > 0 ? (
        <div>
          {tasks.map ((task) => (
            <Task 
            key={task.id}
            data={task}
            onToggleTask={handleToggleTaskStatus}
            onDeleteTask={handleAskDeleteTask}
            />
          ))}
        </div>
      ) : (
        <EmptyState />
      )}
    </Content>
    </TaskContainer>
  </Container>
  );
}
