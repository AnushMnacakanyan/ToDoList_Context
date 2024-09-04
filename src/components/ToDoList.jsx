import { useState } from "react"
import { ToDoContex } from "../context"
import { List } from "./List"
import { AddToDo } from "./AddToDo"

export const ToDoList = () => {
    const [toDo, setToDo] = useState([
        { id: 1, name: "Task1", done: false },
        { id: 2, name: "Task2", done: false },
        { id: 3, name: "Task3", done: false },
        { id: 4, name: "Task4", done: false },
        { id: 5, name: "Task5", done: false },
    ])

    const [clone,setClone]=useState([...toDo])
    

    const removeToDo = (id)=>{
        setToDo([...toDo.filter(item=>item.id!=id)])
    }

    const changeDone = (data) =>{
        data.done= !data.done
        setToDo([...toDo]) 
    }

    const addToDo = (data) =>{
        setToDo([...toDo,{...data,id:Date.now()}])
    }

    const toDoAll = ()=>{
       setToDo([...clone])
    }

    const toDoActive = () =>{
        setToDo([...clone.filter(item=>item.done == false)])
    }

    const toDoCompleted = () =>{
        setToDo([...clone.filter(item=>item.done == true)])
    }


    return <div className="toDo">
        <ToDoContex.Provider value={{ toDo , onDelete:removeToDo , onChange:changeDone , onAdd:addToDo , onActive:toDoActive , onCompleted:toDoCompleted ,onAll:toDoAll}}>
            <List/>
            <AddToDo/>
        </ToDoContex.Provider>

    </div>
}  