import { Container } from "./TaskStyles"
import { Check, Trash } from "@phosphor-icons/react";
import { ITask } from "../../App";

interface Props {
 data: ITask
 onToggleTask: ({ id, value }: { id: number; value: boolean}) => void;
}

export function Task({ data, onToggleTask } : Props) {
 const checkboxClassName = data.isDone ? "checkbox-checked" : "checkbox-unchecked";
 const paragraphClassName = data.isDone ? "paragraph-checked" : "";

 function handleTaskToggle() {
  onToggleTask({ id: data.id, value: !data.isDone })
 }

 return(
  <Container>
   <label htmlFor="checkbox" onClick={handleTaskToggle}>
    <input readOnly type="checkbox" checked={data.isDone}/>
    <span className={`checkbox ${checkboxClassName}`}>
     {data.isDone && <Check size={12}/>}
    </span>
   </label>

   <p className={`${paragraphClassName}`}>
    {data.content}
    </p>
  
   <button>
    <Trash size={16} />
   </button>
  </Container>
 )
}
