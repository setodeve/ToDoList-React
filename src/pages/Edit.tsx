import React, { useContext } from "react"
import { TodoInfoContext } from '../data/data'
import { useParams } from "react-router-dom"

interface Todo{
  id:number,
  title:string,
  category:string,
  priority:string,
  time:number,
  like:string,
  status:string
}

const findTodo = () => {
  const paramsData  = useParams();
  const {todoInfo,setTodoInfo} = useContext(TodoInfoContext)
  return todoInfo.filter((todo:Todo)=>todo.id==Number(paramsData.todoID))
}

const chageTodo = () => {
  
}

export const Edit = () => {
  const todo = findTodo()
  return (
    <div>
      edit
    </div>
  )
}

export default Edit