import React, { useEffect } from 'react'
import { useState } from 'react'
import {TodoContextProvider as ContextProvider } from './Context/TodoContext'
import MainContainer from './Components/Container';
import api from './api/axiosInstance.js'

function App() {
  let [todo , setTodo] = useState([]);
  let [fetch , setFetch] = useState(true)

  async function fetchData(){
    try {
      console.log("fetch data called");
      let response =  await api.get('/get-list')
      let responseData = await response.data 
      let data = responseData.data
      setTodo(data)
      setFetch(false)
    } catch (error) {
      console.log(`error at fetchData() :: ${error.message}`);
    }
  }

  useEffect(()=>{
    if(fetch){
      fetchData();
    }
  } , [fetch])

  let addTodo = async (value) => { 
    try {
      let response = (await api.post('/add-list' , {todo : value})).data
      if(!response.success){
        throw "error while adding todo"
      }
      setFetch(true)
    } catch (error) {
      console.log(`error at addTodo() :: ${error.message}`);
    }
  }

  let deleteTodo = async (id) => { 
    try {
      let response = (await api.delete(`/delete-list/${id}`)).data
    if(!response.success){
      throw "Error while deleting data"
    }
      setFetch(true)
    } catch (error) {
      console.log(`error at deleteTodo() :: ${error.message}`);
    }
    
  }

  let updateTodo = async (id , status ) =>{ 
    try {
      let response = (await api.put(`/update-list/${id}` , { completed : !status } )).data
      if(!response.success){
        throw "Error while updating data"
      }
      setFetch(true)
    } catch (error) {
      console.log(`error at updateTodo() :: ${error.message}`);
    }
  }

  return (
    <ContextProvider value={{todo , addTodo , deleteTodo ,updateTodo}}>      
      <MainContainer />
    </ContextProvider>
  )
}

export default App