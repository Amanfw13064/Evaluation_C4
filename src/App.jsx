import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Main} from './Pages/Main'
import {Routes,Route} from 'react-router-dom'
import {Author} from './Pages/Author'
function App() {

  return (
    <div className="App">

    
     <Routes>
       <Route path="/" element={<Main/>}></Route>
       <Route path='/page/:id' element={<Author/>}></Route>
     </Routes>
    </div>
  )
}

export default App
