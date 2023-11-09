import { useState } from 'react'
import './App.css'
import NavBar from "./components/NavBar"
import ItemListContainer from './components/ItemListContainer'

const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="wenas" />
    </>
  )
}

export default App
