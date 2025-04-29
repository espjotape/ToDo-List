import { Container } from "./EmptyStateStyles"

import clipboard from '../../assets/clipboard.svg'

export function EmptyState() {
 return(
  <Container>
   <div className="separator" />
    <img src={clipboard} alt="prancheta" />
    <p>
    <strong>Você ainda não tem tarefas cadastradas </strong>
    Crie tarefas e organize seus itens a fazer
    </p>
  </Container>
 )
}