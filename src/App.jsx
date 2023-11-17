import { useState } from 'react'
import './App.css'
import NavBar from "./components/NavBar"
import ItemListContainer from './components/ItemListContainer'
import ItemDetail from './components/ItemDetail' 
import { BrowserRouter, Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>

          <Route exact path="/" element={<ItemListContainer />} /> 
          <Route exact path="/category/:category" element={<ItemListContainer />} />
          <Route exact path="/item/:id" element={<ItemDetail />} />
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