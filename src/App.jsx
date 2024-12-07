import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import './App.css'
import './App.scss'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import NewWarehouse from './components/NewWarehouse/NewWarehouse'
import DeleteWarehouse from './components/Delete warehouse/deleteWarehouse'

function App() {

  return (
    <>
    <Header />
    <BrowserRouter>

    <Routes>
      {/* insert component routes here  */}

    </Routes>

    </BrowserRouter>
    <Footer />

    </>
  );
}

export default App;
