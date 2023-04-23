import React, { useContext } from "react"
import { TodoInfoContext } from '../data/data'
import { Todo } from './Todo'

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
          <Todo data={todo}/>
        ))
      }
    </div>
  )
}

export default Todos