import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./inventory-list.scss";
import deleteIcon from "../../assets/Icons/delete_outline-24px.svg";
import editIcon from "../../assets/Icons/edit-24px.svg";

const API_URL = import.meta.env.VITE_APP_API_URL;

function InventoryList() {
  const [inventory, setInventory] = useState([]);
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  
  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/inventory`);
        setInventory(response.data);
      } catch (error) {
        setError("Failed to load inventory");
        console.error(error);
      }
    };
  
    fetchInventory();
  }, []);

  if (error) {
    return <p className="error">{error}</p>;
  }

  if (!inventory.length) {
    return <p>Loading inventory...</p>;
  }

  return (
    <section className="inventory">
      <div className="inventory--header">
        <div className="inventory--header__left">  
          <h1 className="inventory--header__left--title">Inventory</h1>
        </div>
        <div className="inventory--header__right">
              <form>
                <input className="inventory--header__right--search" type="text" placeholder="Search..." />
              </form>
              <button className="inventory--header__right--button">+ Add New Item</button>
        </div>
      </div>

      <div className="inventory__list">
        <div className="inventory__headers">
          <p className="inventory__headers--title">INVENTORY ITEM<img className= "inventory__headers--title--sort-icon" src={"../src/assets/Icons/sort-24px.svg"} /></p>
          <p className="inventory__headers--title">CATEGORY<img className= "inventory__headers--title--sort-icon" src={"../src/assets/Icons/sort-24px.svg"} /></p>
          <p className="inventory__headers--title">STATUS<img className= "inventory__headers--title--sort-icon" src={"../src/assets/Icons/sort-24px.svg"} /></p>
          <p className="inventory__headers--title inventory__headers--title--qty">QTY<img className= "inventory__headers--title--sort-icon" src={"../src/assets/Icons/sort-24px.svg"} /></p>
          <p className="inventory__headers--title">WAREHOUSE<img className= "inventory__headers--title--sort-icon" src={"../src/assets/Icons/sort-24px.svg"} /></p>
          <p className="inventory__headers--title">ACTIONS</p>
        </div>

        {inventory.map((item) => (
        <div key={item.id} className="inventory__item">
          <div className="inventory__content">
            <div className="inventory__left">
              <p className="inventory__mobile-header">INVENTORY ITEM</p>
              <p className="inventory__item--spec">
                <span className="inventory__item--item-name" onClick={() => navigate(`/inventory/${item.id}`)}>{item.item_name}<img className="inventory__chevron" src={"../src/assets/Icons/chevron_right-24px.svg"} alt="Arrow" /></span>
              </p>
        
              <p className="inventory__mobile-header">CATEGORY</p>
              <p className="inventory__item--spec inventory__item--category">{item.category}</p>
            </div>
        
            <div className="inventory__right">
              <p className="inventory__mobile-header">STATUS</p>
              <p className="inventory__item--spec inventory__item--status">
                <span className={`status-tag ${item.status === "IN STOCK" ? "status-tag--in-stock" : "status-tag--out-of-stock"}`}>
                  {item.status}
                </span>
              </p>
        
              <p className="inventory__mobile-header">QTY</p>
              <p className="inventory__item--spec inventory__item--quantity">{item.quantity}</p>
        
              <p className="inventory__mobile-header">WAREHOUSE</p>
              <p className="inventory__item--spec inventory__item--warehouse">{item.warehouse}</p>
            </div>
          </div>
      
          <div className="inventory__actions">
            <button className="inventory__button">
              <img src={deleteIcon} alt="Delete Icon" />
            </button>
            <button className="inventory__button">
              <img src={editIcon} alt="Edit Icon" />
            </button>
          </div>
        </div>
        ))}
      </div>
    </section>
  );
}

export default InventoryList;