import { createContext, useState } from "react";

interface Todo{
  id:number,
  title:string,
  category:string,
  priority:string,
  time:Date,
  like:boolean,
  status:string
}

export const TodoInfoContext = createContext({});
export const TodoInfoProvider = (props:any) => {
  const [todoInfo,setTodoInfo] = useState({todos:[]});
  return(
    <TodoInfoContext.Provider value={{todoInfo,setTodoInfo}} >
      {props.children}
    </TodoInfoContext.Provider>
  )
}

export const GetTodos = () => {
  const todos : Todo[] = [
    {id:1, title:"Call Customer", category:"work", priority:"1", time:new Date("2024-03-25"), like:true, status:"done"},
    {id:2, title:"Write out agenda", category:"work", priority:"1", time:new Date("2024-03-25"), like:true, status:"done"},
    {id:3, title:"Go Swimming", category:"play", priority:"1", time:new Date("2024-03-25"), like:true, status:"done"},
    {id:4, title:"Walk around", category:"play", priority:"1", time:new Date("2024-03-25"), like:true, status:"done"},
    {id:5, title:"Go Hospital", category:"errand", priority:"2", time:new Date("2024-03-25"), like:true, status:"done"},
    {id:6, title:"Go City Center", category:"errand", priority:"2", time:new Date("2024-03-25"), like:true, status:"done"},
  ]
  return todos
}