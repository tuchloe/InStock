import { BrowserRouter, Routes, Route } from "react-router-dom";
import WarehouseList from "./components/Warehouses/warehouses.jsx"
import IndividualWarehouse from "./components/WarehouseIndividual/warehouse-individual.jsx"
import Header from "./components/Header/header.jsx";
import Footer from "./components/Footer/footer.jsx";
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
