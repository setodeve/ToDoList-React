import React, { useContext } from "react"
import { TodoInfoContext } from '../data/data'
import { Todos } from '../components/Todos'

interface Todo{
  id:number,
  title:string,
  category:string,
  priority:string,
  time:number,
  like:string,
  status:string
}

export const Top = () => {

  return (
    <div>
      <Todos/>
    </div>
  )
}

export default Top