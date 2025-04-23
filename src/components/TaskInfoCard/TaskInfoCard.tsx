import { Container, TaskCreate, Completed } from "./TaskInfoCardStyles"

export function TaskInfoCard() {
 return(
  <Container>

   <TaskCreate>
    <p>Tarefas criadas</p>
    <span>6</span>
   </TaskCreate>

   <Completed>
    <p>Concluídas</p>
    <span>0</span>
   </Completed>
  </Container>
 )
}