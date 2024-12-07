import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./warehouse-individual.scss";

const API_URL = import.meta.env.VITE_APP_API_URL;

function IndividualWarehouse () {
    const {id} = useParams();
    const [warehouse, setWarehouse] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${API_URL}/api/warehouses/${id}`);
                setWarehouse(response.data);
            } catch (error) {
                console.error("Error fetching warehouses:", error);
            }
        };

        fetchData();
    }, [id]);

    if (!warehouse) {
        return <p>Loading...</p>;
      }

    return (
        <>
        <section className="individual-warehouse">
            <div className="individual-warehouse--header">
                <div className="individual-warehouse--header__left">
                    <img className="individual-warehouse--header__left--image" src={"../src/assets/Icons/arrow_back-24px.svg"} />
                    <h1 className="individual-warehouse--header__left--name">{warehouse.warehouse_name}</h1>
                </div>
                <div className="individual-warehouse--header__right">
                    <img className="individual-warehouse--header__right--image" src={"../src/assets/Icons/edit-white-24px.svg"} />
                </div>
            </div>
            <div className="individual-warehouse--info">
                <div className="individual-warehouse--info__left">
                    <p className="individual-warehouse--info--header">WAREHOUSE ADDRESS:</p>
                    <p className="individual-warehouse--info--details">{warehouse.address}</p>
                </div>
                <div className="individual-warehouse--info__right">
                    <div className="individual-warehouse--info__right--1">
                        <p className="individual-warehouse--info--header">CONTACT NAME:</p>
                        <p className="individual-warehouse--info--details">{warehouse.contact_name}</p>
                        <p className="individual-warehouse--info--details">{warehouse.contact_position}</p>
                    </div>
                    <div className="individual-warehouse--info__right--2">
                        <p className="individual-warehouse--info--header">CONTACT INFORMATION:</p>
                        <p className="individual-warehouse--info--details">{warehouse.contact_phone}</p>
                        <p className="individual-warehouse--info--details">{warehouse.contact_email}</p>
                    </div>
                </div>
            </div>

            {/* Insert inventory info here  */}

        </section>
        </>
    )
};

export default IndividualWarehouse;