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
    <div className="Todo" key={todo.id}>
      <h3>{todo.title}</h3>
    </div>
  )
}

export default Todo