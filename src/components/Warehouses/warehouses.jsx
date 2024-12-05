import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./warehouses.scss"

const API_URL = import.meta.env.VITE_APP_API_URL;

function WarehouseList () {
    const {id} = useParams();
    const [warehouse, setWarehouse] = useState(null);
    const [warehouses, setWarehouses] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${API_URL}/api/warehouses`);
                console.log(`${API_URL}`);
                setWarehouses(response.data);
            } catch (error) {
                console.error("Error fetching warehouses:", error);
            }
        };

        fetchData();
    }, [id]);

    return (
        <>
        <section className="warehouses">
            <div className="warehouses--header">
                <div className="warehouses--header__left">
                    <h1 className="warehouses--header__left--title">Warehouses</h1>
                </div>
                <div className="warehouses--header__right">
                    <form className="warehouses--header__right--search">
                        <input className="warehouses--header__right--search-bar" type="text" placeholder="Search.." />
                    </form>
                    <form className="warehouses--header__right--button-container">
                    <button type="submit" className="warehouses--header__right--button">+ Add New Warehouse</button>
                    </form>
                </div>
            </div>

            <div className="warehouses--list">
                {warehouses &&
                    warehouses.map((wh) => (
                        <div key={wh.id} className="warehouses--list--individual">
                            <div className="warehouses--list--individual__container warehouses--list--individual__warehouse">
                                <p className="warehouses--list--individual__title">WAREHOUSE</p>
                                <p className="warehouses--list--individual__details"><a className="warehouses--list--individual__details__link" href={`${API_URL}/api/warehouses/${wh.id}`} >{wh.warehouse_name} > </a></p>
                            </div>
                            <div className="warehouses--list--individual__container warehouses--list--individual__address">
                                <p className="warehouses--list--individual__title">ADDRESS</p>
                                <p className="warehouses--list--individual__details">
                                    {wh.address}, {wh.city}, {wh.country}
                                </p>
                            </div>
                            <div className="warehouses--list--individual__container warehouses--list--individual__contact-name">
                                <p className="warehouses--list--individual__title">CONTACT NAME</p>
                                <p className="warehouses--list--individual__details">
                                    {wh.contact_name}
                                </p>
                            </div>
                            <div className="warehouses--list--individual__container warehouses--list--individual__contact-information">
                                <p className="warehouses--list--individual__title">CONTACT INFORMATION</p>
                                <p className="warehouses--list--individual__details">
                                    {wh.contact_phone}
                                    <br />
                                    {wh.contact_email}
                                </p>
                            </div>
                            <div className="warehouses--list--individual--images">
                                <a href="#"><img src={"../src/assets/Icons/delete_outline-24px.svg"} /></a>
                                <a href="#"><img src={"../src/assets/Icons/edit-24px.svg"} /></a>
                            </div>
                       </div>
                    ))}
            </div>
        </section>
        </>
    )
};

export default WarehouseList;