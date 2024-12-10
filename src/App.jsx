import { BrowserRouter, Routes, Route } from "react-router-dom";
import WarehouseList from "./components/Warehouses/warehouses.jsx"
import IndividualWarehouse from "./components/WarehouseIndividual/warehouse-individual.jsx"
import Header from "./components/Header/header.jsx";
import Footer from "./components/Footer/footer.jsx";
import './App.css'
import './App.scss'
import NewWarehouse from './components/NewWarehouse/NewWarehouse'
import DeleteWarehouse from './components/Delete warehouse/deleteWarehouse'
import NewInventory from './components/NewInventory/NewInventory.jsx'
import EditWarehouse from "./components/EditWarehouse/EditWarehouse.jsx";

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

      <Route path="/inventory-list" element={
        <>
        <Header />
        <Footer />
        </>
      } />

      <Route path="/item-details" element={
        <>
        <Header />
        <Footer />
        </>
      } />

      <Route path="/edit-warehouse/:id" element={
        <>
        <Header />
        <EditWarehouse />
        <Footer />
        </>
      } />

      <Route path="/new-warehouse" element={
        <>
        <Header />
        <NewWarehouse />
        <Footer />
        </>
      } />

      <Route path="/add-inventory" element={
        <>
        <Header />
        <NewInventory />
        <Footer />
        </>
      } />

      <Route path="/edit-inventory" element={
        <>
        <Header />
        <Footer />
        </>
      } />


    </Routes>
    </BrowserRouter>
    </>
  );
};


export default App;
