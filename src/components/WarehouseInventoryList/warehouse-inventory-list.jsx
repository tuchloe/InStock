import React, { useEffect, useState } from "react";
import "./warehouse-inventory-list.scss";
import deleteIcon from "../../assets/Icons/delete_outline-24px.svg";
import editIcon from "../../assets/Icons/edit-24px.svg";

const API_URL = import.meta.env.VITE_APP_API_URL;

function WarehouseInventoryList({ warehouseId }) {
  const [inventory, setInventory] = useState([]);
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchInventory = async () => {
  //     try {
  //       const response = await axios.get(`${API_URL}/api/warehouses/${warehouseId}/inventory`);
  //       setInventory(response.data);
  //     } catch (error) {
  //       setError("Failed to load inventory");
  //       console.error(error);
  //     }
  //   };

  //   fetchInventory();
  // }, [warehouseId]);

  useEffect(() => {
    // Mock inventory data
    const mockInventory = [
      { id: 1, item_name: "Television", status: "IN STOCK", category: "Electronics", quantity: 50, warehouse: "Manhattan" },
      { id: 2, item_name: "Gym Bag", status: "OUT OF STOCK", category: "Gear", quantity: 0, warehouse: "Brooklyn" },
      { id: 3, item_name: "Hoodie", status: "OUT OF STOCK", category: "Apparel", quantity: 0, warehouse: "Queens" },
    ];
  
    // Simulate API call delay
    setTimeout(() => {
      setInventory(mockInventory);
    }, 1000);
  }, [warehouseId]);

  const filteredInventory = inventory.filter((item) =>
    item.item_name.toLowerCase().includes(search.toLowerCase())
  );

  if (error) {
    return <p className="error">{error}</p>;
  }

  if (!inventory.length) {
    return <p>Loading inventory...</p>;
  }

  return (
    <section className="inventory">
      <div className="inventory--header">
        <div className="inventory--header__left"></div>  
          <h1 className="inventory--header__left--title">Inventory</h1>
        </div>
        <div className="inventory--header__right">
          <div className="inventory--header__right--search">
              <form>
                <input className="inventory--header__right--search-bar" type="text" placeholder="Search..." />
              </form>
              <button className="inventory--header__right--button">+ Add New Item</button>
          </div>
        </div>

      {/* Table */}
      <div className="inventory__list">
        {/* Desktop/Tablet Headers */}
        <div className="inventory__headers">
          <p>INVENTORY ITEM<img src={"../src/assets/Icons/sort-24px.svg"} /></p>
          <p>CATEGORY<img src={"../src/assets/Icons/sort-24px.svg"} /></p>
          <p>STATUS<img src={"../src/assets/Icons/sort-24px.svg"} /></p>
          <p>QTY<img src={"../src/assets/Icons/sort-24px.svg"} /></p>
          <p>WAREHOUSE<img src={"../src/assets/Icons/sort-24px.svg"} /></p>
          <p>ACTIONS<img src={"../src/assets/Icons/sort-24px.svg"} /></p>
        </div>

        {filteredInventory.map((item) => (
        <div key={item.id} className="inventory__item">
        <div className="inventory__content">
          <div className="inventory__left">
            <p className="inventory__mobile-header">INVENTORY ITEM</p>
            <p className="inventory__item--spec">
              <span className="inventory__item--name">{item.item_name}<img className="inventory__chevron" src={"../src/assets/Icons/chevron_right-24px.svg"} alt="Arrow" /></span>
            </p>
      
            <p className="inventory__mobile-header">CATEGORY</p>
            <p className="inventory__item--spec">{item.category}</p>
          </div>
      
          <div className="inventory__right">
            <p className="inventory__mobile-header">STATUS</p>
            <p className="inventory__item--spec">
              <span className={`status-tag ${item.status === "IN STOCK" ? "status-tag--in-stock" : "status-tag--out-of-stock"}`}>
                {item.status}
              </span>
            </p>
      
            <p className="inventory__mobile-header">QTY</p>
            <p className="inventory__item--spec">{item.quantity}</p>
      
            <p className="inventory__mobile-header">WAREHOUSE</p>
            <p className="inventory__item--spec">{item.warehouse}</p>
          </div>
        </div>
      
        <div className="inventory__actions">
          <button className="inventory__delete">
            <img src={deleteIcon} alt="Delete Icon" />
          </button>
          <button className="inventory__edit">
            <img src={editIcon} alt="Edit Icon" />
          </button>
        </div>
      </div>
        ))}
      </div>
    </section>
  );
}

export default WarehouseInventoryList;