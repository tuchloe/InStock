import { useState } from 'react'
import './App.scss'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import NewWarehouse from './components/NewWarehouse/NewWarehouse'
import DeleteWarehouse from './components/Delete warehouse/deleteWarehouse'

function App() {
  return (
    <>
      <Header/>
      <NewWarehouse/>
      <DeleteWarehouse/>
      <Footer/>
    </>
  )
}

export default App
