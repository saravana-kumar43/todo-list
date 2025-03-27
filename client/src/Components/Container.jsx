import React from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

function Container() {
  return (
    <div className='flex flex-col items-center justify-center gap-10 h-screen w-full '>
    <TodoForm />
    <TodoList />
  </div>
  )
}

export default Container