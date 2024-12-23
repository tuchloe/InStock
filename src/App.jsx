import { BrowserRouter, Routes, Route } from "react-router-dom";
import WarehouseList from "./components/Warehouses/warehouses.jsx"
import IndividualWarehouse from "./components/WarehouseIndividual/warehouse-individual.jsx"
import WarehouseInventoryList from "./components/WarehouseInventoryList/warehouse-inventory-list.jsx";
import InventoryList from "./components/InventoryList/inventory-list.jsx";
import InventoryItemDetails from "./components/InventoryItemDetails/inventory-item-details.jsx";
import Header from "./components/Header/header.jsx";
import Footer from "./components/Footer/footer.jsx";
import './App.css'
import './App.scss'
import NewWarehouse from './components/NewWarehouse/NewWarehouse'
import DeleteWarehouse from './components/Delete warehouse/deleteWarehouse'
import NewInventory from './components/NewInventory/NewInventory.jsx'
import EditWarehouse from "./components/EditWarehouse/EditWarehouse.jsx";
import EditInventory from "./components/EditInventory/EditInventory.jsx";
import DeleteInventory from "./components/DeleteInventory/DeleteInventory.jsx";
DeleteInventory

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

          <Route path="/delete-warehouse/:id" element={
            <>
            <Header />
            <DeleteWarehouse />
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
        <EditInventory />
        <Footer />
        </>
      } />

      <Route path="/delete-warehouse" element={
        <>
        <Header />
        <DeleteWarehouse />
        <Footer />
        </>
      } />

<<<<<<< HEAD
      <Route path="/inventory/:id" element={
        <>
        <Header />
        <InventoryItemDetails />
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
=======
      <Route path="/delete-inventory" element={
>>>>>>> 81f355cc3090fe2b27f57061c0fd85ac6ec6ab0a
        <>
        <Header />
        <DeleteInventory />
        <Footer />
        </>
      } />


    </Routes>
    </BrowserRouter>
    </>
  );
};


export default App;
