import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./warehouses.scss"

const API_URL = import.meta.env.VITE_APP_API_URL;

// export const fetchWarehouses = async () => {
//     const response = await axios.get(`${API_URL}/`);
//     return response.data;
// }

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
                    <button type="submit" className="warehouses--header__right--button">+Add New Warehouse</button>
                    </form>
                </div>
            </div>
            {/* <div className="warehouses--list--total">
                <div key={warehouse.id} className="warehouses--list--individual">
                    <div className="warehouses--list--individual__warehouse">
                        <p className="arehouses--list--individual__warehouse-title">WAREHOUSE</p>
                        {warehouses && warehouses.filter((wh) => !id || wh.id === parseInt(id, 10))
                        .map((wh) => (
                            <p key={wh.id}>{wh.warehouse_name}</p>
                        ))}
                    </div>
                    <div className="warehouses--list--individual__address">
                    <p className="arehouses--list--individual__address-title">ADDRESS</p>
                    </div>
                    <div className="warehouses--list--individual__contact-name">
                    <p className="arehouses--list--individual__contact-name-title">CONTACT NAME</p>
                    </div>
                    <div className="warehouses--list--individual__contact-information">
                    <p className="arehouses--list--individual__contact-information-title">CONTACT INFORMATION</p>
                    </div>
                </div>
            </div> */}

            <div className="warehouses--list--total">
                {warehouses &&
                    warehouses.map((wh) => (
                        <div key={wh.id} className="warehouses--list--individual">
                            <div className="warehouses--list--individual__warehouse">
                                <p className="warehouses--list--individual__warehouse-title">WAREHOUSE</p>
                                <p className="warehouses--list--individual__warehouse-name">{wh.warehouse_name}</p>
                            </div>
                            <div className="warehouses--list--individual__address">
                                <p className="warehouses--list--individual__address-title">ADDRESS</p>
                                <p className="warehouses--list--individual__address-details">
                                    {wh.address}, {wh.city}, {wh.country}
                                </p>
                            </div>
                            <div className="warehouses--list--individual__contact-name">
                                <p className="warehouses--list--individual__contact-name-title">CONTACT NAME</p>
                                <p className="warehouses--list--individual__contact-name-details">
                                    {wh.contact_name}
                                </p>
                            </div>
                            <div className="warehouses--list--individual__contact-information">
                                <p className="warehouses--list--individual__contact-information-title">CONTACT INFORMATION</p>
                                <p className="warehouses--list--individual__contact-information-details">
                                    Phone: {wh.contact_phone}
                                    <br />
                                    Email: {wh.contact_email}
                                </p>
                            </div>
                        </div>
                    ))}
            </div>
        </section>
        </>
    )
};

export default WarehouseList;