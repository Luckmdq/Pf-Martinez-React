import { useState } from 'react'
import './App.css'
import NavBar from "./components/NavBar"
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer' 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from './context/cartContext'
import { Cart } from './components/Cart.jsx'


const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} /> 
          <Route exact path="/category/:category" element={<ItemListContainer />} />
          <Route exact path="/item/:id" element={<ItemDetailContainer />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App