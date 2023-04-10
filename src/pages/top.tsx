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

interface TodoList{
  todos: Array<Todo>
}

export const Top : React.FC<TodoList> = (props) => {
  return (
    <div>

    </div>
  )
}