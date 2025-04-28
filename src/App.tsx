import { Header } from "./components/Header/Header"
import { Input } from "./components/Input/Input";
import { TaskInfoCard } from "./components/TaskInfoCard/TaskInfoCard"
import { EmptyState } from "./components/EmptyState/EmptyState.tsx";

import { Container, Content, TaskAction, TaskContainer, ButtonCreate } from './AppStyles';
import { Task } from "./components/Task/Task.tsx";
import { useState } from "react";

export interface ITask {
  id: number
  content: string;
  isDone: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<ITask[]>([
    {
      id: 1,
      content: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
      isDone: false
    },
    {
      id: 2,
      content: "Outra tarefa qualquer",
      isDone: true
    },
  ]);
  const tasksCreated = tasks.length;
  const tasksCompleted = tasks.filter(task => task.isDone).length;

  function handleToggleTaskStatus ({ id, value }: { id: number; value: boolean}) {
    const updatedTasks = tasks.map((task) => {
      if(task.id === id) {
        return {...task, isDone: value}
      }

      return{...task}
    })
    setTasks(updatedTasks)
  }

 return (
 <Container>
   <Header/>

    <TaskContainer>
      <TaskAction>
        <Input />
        <ButtonCreate>Criar</ButtonCreate>
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
