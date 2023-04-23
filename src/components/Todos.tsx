import React, { useContext } from "react"
import { TodoInfoContext } from '../data/data'

interface Todo{
  id:number,
  title:string,
  category:string,
  priority:string,
  time:number,
  like:string,
  status:string
}

export const Todos = () => {
  const {todoInfo,setTodoInfo} = useContext(TodoInfoContext)
  const todos = todoInfo
  return (
    <div>
      {
        todos.map((todo:Todo)=>(
          <div className="Todo" key={todo.id}>
            <h3>{todo.title}</h3>
          </div>
        ))
      }
    </div>
  )
}

export default Todos