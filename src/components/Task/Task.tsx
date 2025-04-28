import { Container } from "./TaskStyles"
import { Check, Trash } from "@phosphor-icons/react";
import { ITask } from "../../App";

interface Props {
 data: ITask
 onToggleTask: ({ id, value }: { id: number; value: boolean}) => void;
 onDeleteTask: (id: number) => void;
}

export function Task({ data, onToggleTask, onDeleteTask } : Props) {
 const checkboxClassName = data.isDone ? "checkbox-checked" : "checkbox-unchecked";
 const paragraphClassName = data.isDone ? "paragraph-checked" : "";

 function handleTaskToggle() {
  onToggleTask({ id: data.id, value: !data.isDone })
 }

 function handleDelete(){
  onDeleteTask(data.id)
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
  
   <button onClick={handleDelete}>
    <Trash size={16} />
   </button>
  </Container>
 )
}
