import { Link } from "react-router-dom";

interface Todo{
  id:number,
  title:string,
  category:string,
  priority:string,
  time:number,
  like:string,
  status:string
}

export const Todo = (data:Todo) => {
  const todo = data.data
  return (
    <div>
      <Link to={`/todos/${todo.id}/`}>
        <h3>{todo.title}</h3>
      </Link>
    </div>
  )
}

export default Todo