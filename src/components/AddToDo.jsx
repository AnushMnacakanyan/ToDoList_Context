import { useContext } from "react"
import { ToDoContex } from "../context"
import { useForm } from "react-hook-form"

export const AddToDo = () => {
    const { onAdd } = useContext(ToDoContex)
    const { register, reset, handleSubmit, formState: { errors } } = useForm()
    const save = (data) => {
        onAdd(data)
        reset()
    }
    return <div>
        <h3>AddToDo</h3>
        <form onSubmit={handleSubmit(save)}>
            <input
                type="text"
                placeholder="Add your task name"
                {...register("name", {
                    required: "Enter your task name"
                })} />
            {errors.name && <p style={{color:"red"}}>{errors.name.message}</p>}
            <button>save</button>
        </form>
    </div>
}