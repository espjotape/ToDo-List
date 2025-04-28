import { Container, TaskCreate, Completed } from "./TaskInfoCardStyles"

interface TaskInfoCardProps {
 tasksCreated: number;
 tasksCompleted: number;
}

export function TaskInfoCard({ tasksCreated, tasksCompleted }: TaskInfoCardProps) {
 return(
  <Container>

   <TaskCreate>
    <p>Tarefas criadas</p>
    <span>{tasksCreated}</span>
   </TaskCreate>

   <Completed>
    <p>Concluídas</p>
    <span>{tasksCompleted} de {tasksCreated}</span>
   </Completed>
  </Container>
 )
}