import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/header.jsx";
import Footer from "./components/Footer/Footer.jsx";

import './App.css'

function App() {

  return (
    <>
    <BrowserRouter>

    <Routes>
      <Route path="/" element={
        <>
        <Header/>
        <Footer/>
        </>
      } />

    </Routes>

    </BrowserRouter>
    </>
  )
}

export default App
