import { useContext } from "react"
import { ToDoContex } from "../context"
import { ToDoItem } from "./ToDoItem"
import { ToDoFilter } from "./ToDoFilter"

export const List = () =>{
    const {toDo}=useContext(ToDoContex)
    return <div>
       <h3>ToDoList</h3>
       <ToDoFilter/>
       {
        toDo.map(item=>
            <ToDoItem key={item.id} item={item} />
         )
       } 
       
    </div>
}