import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import NumberPAge from './components/NumberPAge'
import HomePage from './components/HomePage'
import StyledWordPage from './components/StyledWordPage'
import WordPage from './components/WordPage'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>

        <Route path="/home" element={<HomePage />} />
        {/* <Route path="/:word" element={<WordPage />} /> */}
        <Route path="/:number" element={<NumberPAge />} />
        <Route path="/:word/:color1/:color2" element={<StyledWordPage />} />
        </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
