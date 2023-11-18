import { useState } from 'react'
import './App.css'
import NavBar from "./components/NavBar"
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer' 
import { BrowserRouter, Routes, Route } from "react-router-dom";


const App = () => {
  return (
      <BrowserRouter>
        <NavBar />
        <Routes>

          <Route exact path="/" element={<ItemListContainer />} /> 
          <Route exact path="/category/:category" element={<ItemListContainer />} />
          <Route exact path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App

{/* 
    <>

      <NavBar />
    </> */}