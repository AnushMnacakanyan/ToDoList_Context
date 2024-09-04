import { useContext } from "react"
import { ToDoContex } from "../context"

export const ToDoFilter = () => {
    const {onActive,onAll,onCompleted}=useContext(ToDoContex)
    return <div>
        <h3>ToDoFilter</h3>
        <button onClick={onAll} >all</button>
        <button onClick={onActive}>active</button>
        <button onClick={onCompleted}>completed</button>
     
    </div>
}