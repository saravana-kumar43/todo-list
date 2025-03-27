import React from 'react'
import { FaRegTrashAlt } from "react-icons/fa";
import { useTodo } from '../Context/TodoContext';

function Todo({
  completed = false , 
  _id = "" , 
  todo = "todo value" , 
  deleteFunction = (id)=>{} ,
  updatefunction = (id)=>{}
}){
  return(
  <div className={`flex gap-4  px-4 py-3 w-[350px] font-semibold justify-evenly text-xl rounded-md ${(completed) ? "bg-pink-500" : "bg-yellow-500"}`}>
    <input onClick={()=>updatefunction(_id , completed)} type="checkbox" name="" id="" />
    <div>{todo}</div>
    <button onClick={()=>deleteFunction(_id)}><FaRegTrashAlt size={20} /></button>
  </div>
  )
}

function TodoList() {
    let { todo,updateTodo , deleteTodo } = useTodo()
  return (
    <div className='flex flex-col gap-2'>
    {
      (todo.length !== 0) && todo.map((item)=> <Todo key={item._id} {...item} deleteFunction={deleteTodo} updatefunction={updateTodo}/>)
    }
    </div>
  )
}

export default TodoList