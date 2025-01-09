import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./inventory-item-details.scss";
import editIcon from "../../assets/Icons/edit-24px.svg";
import arrowBackIcon from "../../assets/Icons/arrow_back-24px.svg";
import axios from "axios";

const API_URL = import.meta.env.VITE_APP_API_URL;

function InventoryItemDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [item, setItem] = useState(null);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchItemDetails = async () => {
        try {
          const response = await axios.get(`${API_URL}/api/inventories/${id}`);
          setItem(response.data);
        } catch (error) {
          setError("Failed to load inventory item details");
          console.error(error);
        }
      };
  
      fetchItemDetails();
    }, [id]);

    if (error) {
      return <p className="error">{error}</p>;
    }
  
    if (!item) {
      return <p>Loading inventory item details...</p>;
    }
  
    return (
      <section className="inventory-details">
        <div className="inventory-details__header">
          <div className="inventory-details__header__left">
            <button className="inventory-details__header__back" onClick={() => navigate(-1)}>
              <img src={arrowBackIcon} alt="Back" />
            </button>
            <h1 className="inventory-details__header__title">{item.item_name}</h1>
          </div>
          <button className="inventory-details__header__edit" onClick={() => navigate(`/inventory/${id}/edit`)}>
            <img className="inventory-details__header__edit__button" src={editIcon} alt="Edit Item" />
            <p className="inventory-details__header__edit__text">Edit</p>
          </button>
        </div>
  
        <div className="inventory-details__item">
          <div className="inventory-details__item__section__left">
            <div className="inventory-details__item__section">
              <p className="inventory-details__item__label">ITEM DESCRIPTION:</p>
              <p className="inventory-details__item--spec inventory-details__item--description">{item.description}</p>
            </div>
            <div className="inventory-details__item__section">
              <p className="inventory-details__item__label">CATEGORY:</p>
              <p className="inventory-details__item--spec inventory-details__item--category">{item.category}</p>
            </div>
          </div>
          <div className="inventory-details__item__section__right">
            <div className="inventory-details__item__section__status-quantity">
              <div className="inventory-details__item__section">
                <p className="inventory-details__item__label">STATUS:</p>
                <p className="inventory-details__item--spec inventory-details__item--status">
                  <span className={`status-tag ${ item.status === "IN STOCK" ? "status-tag--in-stock" : "status-tag--out-of-stock" }`}>
                    {item.status}
                  </span>
                </p>
              </div>
              <div className="inventory-details__item__section">
                <p className="inventory-details__item__label">QUANTITY:</p>
                <p className="inventory-details__item--spec inventory-details__item--quantity">{item.quantity}</p>
              </div>
            </div>
            <div className="inventory-details__item__section">
              <p className="inventory-details__item__label">WAREHOUSE:</p>
              <p className="inventory-details__item--spec inventory-details__item--warehouse">{item.warehouse}</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default InventoryItemDetails;