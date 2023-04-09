import { createContext, useState } from "react";

interface Todo{
  id:number,
  title:string,
  category:string,
  priority:string,
  time:number,
  like:string,
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