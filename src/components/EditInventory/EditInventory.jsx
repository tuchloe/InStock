import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './EditInventory.scss';
import arrowBack from '../../assets/Icons/arrow_back-24px.svg';
import axios from 'axios';

const API_URL = import.meta.env.VITE_APP_API_URL;

const EditInventory = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [inventoryData, setInventoryData] = useState({
        item_name: "",
        description: "",
        category: "",
        status: "",
        quantity: 0,
        warehouse: ""
    });
    const [status, setStatus] = useState("");

    useEffect(() => {
        const fetchInventoryData = async () => {
            try {
                // Fetch inventory data by ID
                const inventoryResponse = await axios.get(`${API_URL}/api/inventory/${id}`);
                const inventory = inventoryResponse.data;

                // Fetch warehouse name by warehouse_id
                const warehouseResponse = await axios.get(`${API_URL}/api/warehouses/${inventory.warehouse_id}`);
                const warehouseName = warehouseResponse.data.warehouse_name;

                setInventoryData({
                    item_name: inventory.item_name,
                    description: inventory.description,
                    category: inventory.category,
                    status: inventory.status,
                    quantity: inventory.quantity,
                    warehouse: warehouseName
                });

                setStatus(inventory.status);
            } catch (error) {
                console.error("Error fetching inventory data:", error);
                alert("Failed to load inventory data");
            }
        };

        fetchInventoryData();
    }, [id]);

    const handleStatusChange = (e) => {
        setStatus(e.target.value);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInventoryData({ ...inventoryData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validation
        if (Object.values(inventoryData).some(value => value === "")) {
            alert("Please fill all fields");
            return;
        }

        try {
            const payload = {
                item_name: inventoryData.item_name,
                description: inventoryData.description,
                category: inventoryData.category,
                status: inventoryData.status,
                quantity: inventoryData.status === "in stock" ? inventoryData.quantity : 0,
                warehouse_id: inventoryData.warehouse // Warehouse ID needs to be mapped back if required
            };

            await axios.put(`${API_URL}/api/inventory/${id}`, payload);
            alert("The inventory item has been updated successfully.");
            navigate('/inventory');
        } catch (error) {
            console.error("Error updating inventory:", error);
            alert("Failed to update inventory item");
        }
    };

    return (
        <form onSubmit={handleSubmit} className='editInventoryFlex'>
            <div>
                <div className='editInventory__flex'>
                    <img src={arrowBack} alt="" onClick={() => navigate(-1)} />
                    <h1>Edit Inventory Item</h1>
                </div>
                <div className='form__flex--inventory'>
                    <div>
                        <div className='padding__oneRem--inventory'>
                            <h1>Item Details</h1>
                        </div>
                        <label>
                            <span>Item Name </span><br/>
                            <input 
                                type='text' 
                                name='item_name' 
                                value={inventoryData.item_name} 
                                onChange={handleInputChange} 
                                placeholder='Item Name' 
                            />
                        </label>
                        <br />
                        <label>
                            <span>Description</span><br />
                            <textarea 
                                id='descBox--inventory' 
                                name='description' 
                                value={inventoryData.description} 
                                onChange={handleInputChange} 
                                placeholder='Please enter a brief item description...'
                            />
                        </label>
                        <br />
                        <label htmlFor='category'>
                            <span>Category</span>
                        </label>
                        <br />
                        <select 
                            id='category' 
                            name="category" 
                            value={inventoryData.category} 
                            onChange={handleInputChange}
                        >
                            <option value="" disabled>Please Select</option>
                            <option value="Electronics">Electronics</option>
                            <option value="Gear">Gear</option>
                            <option value="Apparel">Apparel</option>
                            <option value="Accessories">Accessories</option>
                            <option value="Health">Health</option>
                        </select>
                        <br />
                    </div>
                    <div>
                        <div className='padding__oneRem--inventory'>
                            <h1>Item Availability</h1>
                        </div>
                        <label>
                            <span>Status</span> <br />
                            <div className="radio-group">
                                <label id='instocktrue'>
                                    <input 
                                        type='radio' 
                                        name='status' 
                                        value='in stock' 
                                        checked={status === 'in stock'} 
                                        onChange={(e) => {
                                            handleStatusChange(e);
                                            handleInputChange(e);
                                        }}
                                    /> In Stock
                                </label>
                                <label id='instockfalse'>
                                    <input 
                                        type='radio' 
                                        name='status' 
                                        value='out of stock' 
                                        checked={status === 'out of stock'} 
                                        onChange={(e) => {
                                            handleStatusChange(e);
                                            handleInputChange(e);
                                        }}
                                    /> Out of Stock
                                </label>
                            </div>
                        </label>
                        <br />
                        {status === 'in stock' && (
                            <label id='quantitysection'>
                                <span>Quantity</span> <br />
                                <input 
                                    type='number' 
                                    name='quantity' 
                                    value={inventoryData.quantity} 
                                    onChange={handleInputChange} 
                                    placeholder='0' 
                                    id='quantityformfield'
                                />
                            </label>
                        )}
                        <br />
                        <label htmlFor='warehouse'>
                            <span>Warehouse</span>
                        </label>
                        <br />
                        <input 
                            type='text' 
                            id='warehouse' 
                            name="warehouse" 
                            value={inventoryData.warehouse} 
                            disabled
                        />
                    </div>
                </div>

                <div className='editInventory__submit'>
                    <div onClick={() => navigate(-1)}>Cancel</div>
                    <button type='submit'>Save Changes</button>
                </div>
            </div>
        </form>
    );
};

export default EditInventory;
