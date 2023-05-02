import React, { useContext } from "react"
import { TodoInfoContext } from '../data/data'
import { Form,useParams } from "react-router-dom"

interface Todo{
  id:number,
  title:string,
  category:string,
  priority:string,
  time:number,
  like:string,
  status:string
}

export const Edit = () => {
  const {todoInfo,setTodoInfo} = useContext(TodoInfoContext)
  const paramsData  = useParams();

  const findTodo = () => {
    return todoInfo.filter((todo:Todo)=>todo.id==Number(paramsData.todoID))
  }
  
  const chageTodo = (e) => {
    const todos = [...todoInfo]
      
    todos.map((todo) =>{
      if(todo.id==Number(paramsData.todoID)){
        todo.title = e.target.value
      }else{
        //IDに一致しないものは何もしない
      }
      return todo
    })
    setTodoInfo(todos)
  }
  
  const afterSubmit = (e) => {
    console.log(todoInfo)
  }

  const todo = findTodo()
  return (
    <Form method="get" action="/" onSubmit={afterSubmit}>
      <label>
        Title: <input name="myInput" defaultValue={todo[0].title} onChange={chageTodo} />
      </label>
      <hr />
    <button type="submit">Edit</button>
  </Form>
  )
}

export default Edit