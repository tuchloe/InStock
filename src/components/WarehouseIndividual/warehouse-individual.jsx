import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./warehouse-individual.scss";

const API_URL = import.meta.env.VITE_APP_API_URL;

function IndividualWarehouse () {
    const {id} = useParams();

    const [warehouse, setWarehouse] = useState(null);
    const [inventory, setInventory] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
             const fetchData = async () => {
            try {
                const response = await axios.get(`${API_URL}/api/warehouses/${id}`);
                setWarehouse(response.data);

                const inventoryResponse = await axios.get(`${API_URL}/api/warehouses/${id}/inventories`);
                setInventory(inventoryResponse.data);
            } catch (error) {
                setError("Failed to load warehouse details or inventory");
                console.error(error);
            }
        };

        fetchData();
    }, [id]);

    if (!warehouse) {
        return <p>Loading warehouse details...</p>;
    }

    return (
        <>
        <section className="individual-warehouse">
            <div className="individual-warehouse--header">
                <div className="individual-warehouse--header__left">
                    <a className="individual-warehouse--header__left--link" href="/"><img className="individual-warehouse--header__left--image" src={"../src/assets/Icons/arrow_back-24px.svg"} /></a>
                    <h1 className="individual-warehouse--header__left--name">{warehouse.warehouse_name}</h1>
                </div>
                <button className="individual-warehouse--header__right">
                    <div className="individual-warehouse--header__right--content">
                        <img className="individual-warehouse--header__right--image" src={"../src/assets/Icons/edit-white-24px.svg"} />
                        <p className="individual-warehouse--header__right--text">Edit</p>
                    </div>
                </button>
            </div>
            <div className="individual-warehouse--info">
                <div className="individual-warehouse--info__left">
                    <p className="individual-warehouse--info--header">WAREHOUSE ADDRESS:</p>
                    <p className="individual-warehouse--info--details__mobile">{warehouse.address}, {warehouse.city}, {warehouse.country}</p>
                    <p className="individual-warehouse--info--details__tablet">{warehouse.address},<br />{warehouse.city}, {warehouse.country}</p>
                </div>
                <div className="individual-warehouse--info__right">
                    <div className="individual-warehouse--info__right--1">
                        <p className="individual-warehouse--info--header">CONTACT NAME:</p>
                        <p className="individual-warehouse--info--details">{warehouse.contact_name}<br />{warehouse.contact_position}</p>
                    </div>
                    <div className="individual-warehouse--info__right--2">
                        <p className="individual-warehouse--info--header">CONTACT INFORMATION:</p>
                        <p className="individual-warehouse--info--details">{warehouse.contact_phone}<br />{warehouse.contact_email}</p>
                    </div>
                </div>
            </div>

            {/* Inventory Section  */}
            <div className="individual-warehouse--inventory">
                {inventory.length > 0 ? (
                    <div className="individual-warehouse--inventory__list">
                        {inventory.map((item) => (
                            <div key={item.id} className="individual-warehouse--inventory__item">
                                <p className="individual-warehouse--inventory__item--name">INVENTORY ITEM {item.item_name}</p>
                                <p className="individual-warehouse--inventory__item--category">CATEGORY {item.category}</p>
                                <p className="individual-warehouse--inventory__item--status">STATUS {" "}
                                    <span className={`status-tag ${item.status === "IN STOCK" ? "status-tag--in-stock" : "status-tag--out-of-stock"}`}>
                                        {item.status}
                                    </span>
                                </p>
                                <p className="individual-warehouse--inventory__item--quantity">QTY {item.quantity}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="individual-warehouse--inventory__empty">
                        No inventory available for this warehouse.
                    </p>
                )}
            </div>

        </section>
        </>
    )
};

export default IndividualWarehouse;