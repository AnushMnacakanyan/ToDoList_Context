import { useContext } from "react"
import { ToDoContex } from "../context"

export const ToDoItem = ({ item }) => {
    const { onDelete,onChange } = useContext(ToDoContex)
    return <div>
        <div className="toDo__item">
            <h3 style={item.done ? { textDecoration: 'line-through', color: "red" } : { textDecoration: 'none' }}>{item.name}</h3>
            <div>
                <button onClick={()=>onChange(item)} >Complete</button>
                <button onClick={() => onDelete(item.id)}>Delete</button>
            </div>
        </div>
    </div>
}