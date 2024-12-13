import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./warehouse-inventory-list.scss";
import editIcon from "../../assets/Icons/edit-24px.svg";
import arrowBackIcon from "../../assets/Icons/arrow_back-24px.svg";
import deleteIcon from "../../assets/Icons/delete_outline-24px.svg";

const API_URL = import.meta.env.VITE_APP_API_URL;

function WarehouseInventoryList() {
  const { id } = useParams();
  
  const navigate = useNavigate();
  const [inventory, setInventory] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/warehouses/${id}/inventories`);
        setInventory(response.data);
      } catch (error) {
        setError("Failed to load inventory for the warehouse.");
        console.error(error);
      }
    };

    fetchInventory();
  }, [id]);

  if (error) {
    return <p className="error">{error}</p>;
  }

  if (!inventory.length) {
    return <p>Loading inventory...</p>;
  }
  

  return (
    <section className="warehouse-inventory">
      <div className="warehouse-inventory__list">
          <div className="warehouse-inventory__headers">
            <p className="warehouse-inventory__headers--title">INVENTORY ITEM<img className= "warehouse-inventory__headers--title--sort-icon" src={"../src/assets/Icons/sort-24px.svg"} /></p>
            <p className="warehouse-inventory__headers--title">CATEGORY<img className= "warehouse-inventory__headers--title--sort-icon" src={"../src/assets/Icons/sort-24px.svg"} /></p>
            <p className="warehouse-inventory__headers--title">STATUS<img className= "warehouse-inventory__headers--title--sort-icon" src={"../src/assets/Icons/sort-24px.svg"} /></p>
            <p className="warehouse-inventory__headers--title warehouse-inventory__headers--title--qty">QUANTITY<img className= "warehouse-inventory__headers--title--sort-icon" src={"../src/assets/Icons/sort-24px.svg"} /></p>
            <p className="warehouse-inventory__headers--title">ACTIONS</p>
          </div>

          {warehouse.inventory.map((item) => (
            <div key={item.id} className="warehouse-inventory__item">
              <div className="warehouse-inventory__content">
                <div className="warehouse-inventory__left">
                  <p className="warehouse-inventory__mobile-header">INVENTORY ITEM</p>
                  <p className="warehouse-inventory__item--spec">
                    <span className="warehouse-inventory__item--item-name" onClick={() => navigate(`/inventory/${item.id}`)}>{item.item_name}<img className="warehouse-__chevron" src={"../src/assets/Icons/chevron_right-24px.svg"} alt="Arrow" /></span>
                  </p>
                  
                  <p className="warehouse-inventory__mobile-header">CATEGORY</p>
                  <p className="warehouse-inventory__item--spec warehouse-inventory__item--category">{item.category}</p>
                </div>

                <div className="warehouse-inventory__right">
                  <p className="warehouse-inventory__mobile-header">STATUS</p>
                  <p className="warehouse-inventory__item--spec warehouse-inventory__item--status">
                    <span className={`status-tag ${ item.status === "IN STOCK" ? "status-tag--in-stock" : "status-tag--out-of-stock"}`}>
                      {item.status}
                    </span>
                  </p>

                  <p className="warehouse-inventory__mobile-header">QTY</p>
                  <p className="warehouse-inventory__item--spec warehouse-inventory__item--quantity">{item.quantity}</p>
                </div>
              </div>

              <div className="warehouse-inventory__actions">
                <button className="warehouse-inventory__button">
                  <img src={deleteIcon} alt="Delete Icon" />
                </button>
                <button className="warehouse-inventory__button">
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