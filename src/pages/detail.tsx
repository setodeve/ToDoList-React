import { Todo } from '../components/Todo'
import { useParams } from "react-router-dom"
import { TodoInfoContext } from '../data/data'
import { useContext } from "react";

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
  console.log(todoInfo.filter((todo:Todo)=>todo.id==Number(paramsData.todoID)))
  return todoInfo.filter((todo:Todo)=>todo.id==Number(paramsData.todoID))
}

export const Detail = () => {
  const todo = findTodo()
  return (
    <div>
      <Todo data={todo[0]}/>
    </div>
  )
}

export default Detail