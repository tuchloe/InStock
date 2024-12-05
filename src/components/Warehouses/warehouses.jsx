import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

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
                        <input type="text" placeholder="Search.." />
                    </form>
                    <form className="warehouses--header__right--button">
                    <button type="submit" className="warehouses--header__right--button">+Add New Warehouse</button>
                    </form>
                </div>
            </div>
        </section>
        </>
    )
};

export default WarehouseList;