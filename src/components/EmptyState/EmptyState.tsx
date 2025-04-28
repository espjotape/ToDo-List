import { Container } from "./EmptyStateStyles"

export function EmptyState() {
 return(
  <Container>
   <div className="separator" />
    <img src="/src/assets/clipboard.svg" alt="prancheta" />
    <p>
    <strong>Você ainda não tem tarefas cadastradas </strong>
    Crie tarefas e organize seus itens a fazer
    </p>
  </Container>
 )
}