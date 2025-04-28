import { Container } from "./ConfirmModalStyles";

interface ConfirmModalProps {
 onConfirm: () => void;
 onCancel: () => void;
}
 export function ConfirmModal({ onConfirm, onCancel  } : ConfirmModalProps) {
 return(
  <Container>
   <p>Deseja mesmo apagar essa tarefa?</p>

   <div className="btn">
    <button className="btn-confirm" onClick={onConfirm}>
     Confirmar
    </button>
     
    <button className="btn-cancel" onClick={onCancel}>
     Cancelar
    </button>
   </div>
  </Container>
 )
}