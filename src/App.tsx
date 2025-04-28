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
    }
  ]);
  
  function toggleTaskStatus(id: number) {
  setTasks(prevTasks =>
    prevTasks.map(task =>
      task.id === id ? { ...task, isDone: !task.isDone } : task
    )
   );
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
      <TaskInfoCard />
      {tasks.length > 0 ? (
        <div>
          {tasks.map ((task) => (
            <Task 
            key={task.id}
            data={task}
            onToggleDone={() => toggleTaskStatus(task.id)}
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
