import { useState } from 'react'
import './App.css'
import NavBar from "./components/NavBar"
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>

          <Route exact path="/" element={<ItemListContainer />} />
          <Route exact path="/itemDetail" element={<ItemListContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

{/* 
    <>

      <NavBar />
    </> */}