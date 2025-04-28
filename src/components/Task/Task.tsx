import { Container } from "./TaskStyles"
import { Check, Trash } from "@phosphor-icons/react";
import { ITask } from "../../App";

interface Props {
 data: ITask
 onToggleDone: () => void;
}

export function Task({ data, onToggleDone } : Props) {
 const checkboxClassName = data.isDone ? "checkbox-checked" : "checkbox-unchecked";
 return(
  <Container>
   <label htmlFor="checkbox">
    <input readOnly type="checkbox" checked={data.isDone} onClick={onToggleDone} />
    <span className={`checkbox ${checkboxClassName}`}>
     {data.isDone && <Check size={12}/>}
    </span>
   </label>

   <p>{data.content}</p>
  
   <button>
    <Trash size={16} />
   </button>
  </Container>
 )
}
