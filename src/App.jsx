import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import WarehouseList from "./components/Warehouses/warehouses.jsx";
import IndividualWarehouse from "./components/WarehouseIndividual/warehouse-individual.jsx";

function App() {

  return (
    <>
    <BrowserRouter>

    <Routes>
      
      <Route path="/" element={
        <>
        <WarehouseList />
        </>
      } />

      <Route path="/:id" element={
        <>
        <IndividualWarehouse />
        </>
      } />

    </Routes>

    </BrowserRouter>
    </>
  )
}

export default App
