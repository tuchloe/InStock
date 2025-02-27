import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./warehouses.scss";

const API_URL = import.meta.env.VITE_APP_API_URL;

function WarehouseList () {
    const {id} = useParams();
    const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
    const [warehouses, setWarehouses] = useState([]); 

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${API_URL}/api/warehouses`);
                setWarehouses(Array.isArray(response.data) ? response.data : []);
            } catch (error) {
                console.error("Error fetching warehouses:", error);
            }
        };

        fetchData();
    }, [id]);

    const handleSort = (key) => {
        let direction = "asc";
        if (sortConfig.key === key && sortConfig.direction === "asc") {
            direction ="desc";
        }

        setSortConfig({ key, direction });
    } 

    const sortedWarehouses = [...warehouses].sort((a, b) => {
        if (sortConfig.key) {
            const valueA = a[sortConfig.key] || "";
            const valueB = b[sortConfig.key] || "";

            if (typeof valueA === "string" && typeof valueB === "string") {
                return (
                  (valueA.toLowerCase() > valueB.toLowerCase() ? 1 : -1) *
                  (sortConfig.direction === "asc" ? 1 : -1)
                );
              }
    
              if (typeof valueA === "number" && typeof valueB === "number") {
                return (valueA - valueB) * (sortConfig.direction === "asc" ? 1 : -1);
              }
            }
            return 0;
          });

    return (
        <>
        <section className="warehouses">
            <div className="warehouses--header">
                <div className="warehouses--header__left">
                    <h1 className="warehouses--header__left--title">Warehouses</h1>
                </div>
                <div className="warehouses--header__right">
                    <form className="warehouses--header__right--search">
                        <input className="warehouses--header__right--search-bar" type="text" placeholder="Search... " />
                    </form>
                    <form className="warehouses--header__right--button-container">
                        <Link to="/new-warehouse">
                            <button type="button" className="warehouses--header__right--button">+ Add New Warehouse</button>
                        </Link>
                    </form>
                </div>
            </div>

            <div className="warehouses--list__mobile">
                {warehouses && warehouses.map((wh) => (
                    <div key={wh.id} className="warehouses--list--individual">
                        <div className="warehouses--list--individual__container warehouses--list--individual__warehouse">
                            <p className="warehouses--list--individual__title">WAREHOUSE</p>
                            <p className="warehouses--list--individual__details"><a className="warehouses--list--individual__details__link" href={`/${wh.id}`} >{wh.warehouse_name} {'>'} </a></p>
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
                    </div>
                ))}
            </div>
            <div className="warehouses--list__desktop">
                <div className="warehouses--list--header">
                    <div className="warehouses--list--header__item" onClick={() => handleSort("warehouse_name")}>
                        WAREHOUSE<img src={"../src/assets/Icons/sort-24px.svg"} />
                    </div>
                    <div className="warehouses--list--header__item" onClick={() => handleSort("address")}>
                        ADDRESS<img src={"../src/assets/Icons/sort-24px.svg"} />
                    </div>
                    <div className="warehouses--list--header__item" onClick={() => handleSort("contact_name")}>
                        CONTACT NAME<img src={"../src/assets/Icons/sort-24px.svg"} />
                    </div>
                    <div className="warehouses--list--header__item" onClick={() => handleSort("contact_phone")}>
                        CONTACT INFORMATION <img src={"../src/assets/Icons/sort-24px.svg"} />
                    </div>
                    <div className="warehouses--list--header__item">ACTION</div>
                </div>
                {sortedWarehouses.map((wh) => (
                    <div key={wh.id} className="warehouses--list--individual">
                        <div className="warehouses--list--individual__container warehouses--list--individual__warehouse">
                            <p className="warehouses--list--individual__details">
                                <a className="warehouses--list--individual__details__link" href={`/${wh.id}`}>
                                    {wh.warehouse_name} {">"}
                                </a>
                            </p>
                            </div>
                            <div className="warehouses--list--individual__container warehouses--list--individual__address">
                                <p className="warehouses--list--individual__details">
                                    {wh.address}, {wh.city}, {wh.country}
                                </p>
                            </div>
                            <div className="warehouses--list--individual__container warehouses--list--individual__contact-name">
                                <p className="warehouses--list--individual__details">
                                    {wh.contact_name}
                                </p>
                            </div>
                            <div className="warehouses--list--individual__container warehouses--list--individual__contact-information">
                                <p className="warehouses--list--individual__details">
                                    {wh.contact_phone}
                                    <br />
                                    {wh.contact_email}
                                </p>
                            </div>
                            <div className="warehouses--list--individual--images">
                                <a href={`/delete-warehouse/${wh.id}`}><img src={"../src/assets/Icons/delete_outline-24px.svg"} /></a>
                                <a href={`/edit-warehouse/${wh.id}`}><img src={"../src/assets/Icons/edit-24px.svg"} /></a>
                            </div>
                        </div>
                    ))}
            </div>
        </section>
        </>
    )
};

export default WarehouseList;
