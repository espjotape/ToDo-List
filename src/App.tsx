import { Header } from "./components/Header/Header"
import { Input } from "./components/Input/Input";

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
    </TaskContainer>

   <Content>
    
   </Content>
  </Container>
  );
}
