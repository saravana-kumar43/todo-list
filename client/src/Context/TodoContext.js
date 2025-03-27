import { createContext, useContext } from "react";

let TodoContext = createContext({
    todo : [] ,
    addTodo : () => {} ,
    deleteTodo : () => {} ,
    updateTodo : () => {}
})

let TodoContextProvider = TodoContext.Provider ;

let useTodo = () =>{
    return useContext(TodoContext)
}

export {
    TodoContextProvider ,
    useTodo
}