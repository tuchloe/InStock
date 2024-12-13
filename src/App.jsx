import { BrowserRouter, Routes, Route } from "react-router-dom";
import WarehouseList from "./components/Warehouses/warehouses.jsx"
import IndividualWarehouse from "./components/WarehouseIndividual/warehouse-individual.jsx"
import WarehouseInventoryList from "./components/WarehouseInventoryList/warehouse-inventory-list.jsx";
import InventoryList from "./components/InventoryList/inventory-list.jsx";
import InventoryItemDetails from "./components/InventoryItemDetails/inventory-item-details.jsx";
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

      <Route path="/warehouses/:id" element={
        <>
        <Header />
        <IndividualWarehouse />
        <WarehouseInventoryList />
        <Footer />
        </>
      } />

      <Route path="/inventory" element={
        <>
        <Header />
        <InventoryList />
        <Footer />
        </>
      } />

      <Route path="/inventory/:id" element={
        <>
        <Header />
        <InventoryItemDetails />
        <Footer />
        </>
      } />
    
    </Routes>

    </BrowserRouter>

    </>
  );
};

export default App;
