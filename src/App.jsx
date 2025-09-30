import { useState,useEffect } from 'react'

import './App.css'
import { ListTasks } from './components/ListTasks'
import { useDispatch } from 'react-redux'
import { getTasks } from './redux/thunks'


function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getTasks())
  },[dispatch])



  return (
    <>
      <div className='App'>
        <ListTasks />
      </div>
      
    </>
  )
}

export default App
