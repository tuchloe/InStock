import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./warehouses.scss"

function WarehouseList () {


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
        </section>
        </>
    )
};

export default WarehouseList;