import { useState } from 'react'
import './App.scss'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import NewWarehouse from './components/NewWarehouse/NewWarehouse'

function App() {
  return (
    <>
      <Header/>
      <NewWarehouse/>
      <Footer/>
    </>
  )
}

export default App
