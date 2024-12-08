import { BrowserRouter, Routes, Route } from "react-router-dom";
import WarehouseList from "./components/Warehouses/warehouses.jsx"
import IndividualWarehouse from "./components/WarehouseIndividual/warehouse-individual.jsx"
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/footer.jsx";
import './App.css'


function App() {

  return (
    <>
    <Header />
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
    <Footer />

    </>
  );
}

export default App;
