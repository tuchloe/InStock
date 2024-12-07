import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import './App.css'
import './App.scss'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

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
