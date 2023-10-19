import { useState } from 'react'
import { Routes, Route} from "react-router-dom"
import Home from './components/Home'
import QuestionDetail from './components/QuestionDetail'


function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/question' element={<QuestionDetail/>} />
      </Routes>
    </>
  )
}

export default App
