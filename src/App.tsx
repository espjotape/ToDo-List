import { Header } from "./components/Header/Header"
import { Input } from "./components/Input/Input";
import { TaskInfoCard } from "./components/TaskInfoCard/TaskInfoCard"

import { Container, Content, TaskAction, TaskContainer, ButtonCreate } from './AppStyles';

export function App() {
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
    </Content>
    </TaskContainer>
  </Container>
  );
}
