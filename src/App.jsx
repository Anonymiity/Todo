import { useState } from 'react'
import './App.css'
import Header from './components/header.jsx'
import Mains from './components/Mains.jsx'

function App() {

  return (
    <>

      <Header />
      <Mains />
      {/* <p className='b font-extrabold font-sans%'>Hello i am tanush! <br/>And i am making a todolist app using localstorage in chrome browser.</p> */}
    </>
  )
}

export default App
