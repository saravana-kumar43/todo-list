import React , {useState} from 'react'
import { useTodo } from '../Context/TodoContext';

function TodoForm() {
    let [value , setValue] = useState("");
    let {addTodo} = useTodo()
    function handleSubmit(e){
        e.preventDefault();
        addTodo(value)
        setValue("")
    }
  return (
    <form 
        onSubmit={handleSubmit}
        className='h-fit w-fit rounded border-[2px] border-black'
      >

        <input 
            type="text"  
            className='outline-none px-3 py-2'
            onChange={(e) => setValue(e.target.value)}
            value={value}
        />

        <input 
            type="submit" 
            value="Add Todo" 
            className='px-3 py-2 font-bold rounded-r bg-green-900'
        />
      </form>
  )
}

export default TodoForm