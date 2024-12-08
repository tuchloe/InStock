import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'

function App() {

  return (
    <>
    <BrowserRouter>

    <Routes>
      
      <Route path="/" element={
        <>
        <Header />
        <WarehouseList />
        <Footer />
        </>
      } />

      <Route path="/:id" element={
        <>
        <Header />
        <IndividualWarehouse />
        <Footer />
        </>
      } />

    </Routes>

    </BrowserRouter>

    </>
  );
}

export default App;
