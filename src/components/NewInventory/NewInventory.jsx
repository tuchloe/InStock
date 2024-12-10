import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { baseUrl } from '../../../utils/utils';
import './NewInventory.scss';
import arrowBack from '../../assets/Icons/arrow_back-24px.svg';
import axios from 'axios';

const NewInventory = () => {
    const [status, setStatus] = useState('');

    const handleStatusChange = (e) => {
        setStatus(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const newInventory = {
            item_name: e.target.itemName.value,
            description: e.target.description.value,
            category: e.target.category.value,
            status: e.target.status.value,
            quantity: e.target.quantity?.value || '',
            warehouse: e.target.warehouse.value
        };

        // Validation
        if (Object.values(newInventory).some(value => value === "")) {
            alert("Please fill all fields");
            return;
        }

        try {
            const response = await axios.post(`${baseUrl}/inventories`, newInventory);
            alert("The inventory item has been created successfully.");
        } catch (error) {
            alert(error.response?.data?.message || "An error occurred");
        }
    };

    return (
        <form onSubmit={handleSubmit} className='newInventoryFlex'>
            <div>
                <div className='addNewInventory__flex'>
                    <img src={arrowBack} alt="" />
                    <h1>Add New Inventory Item</h1>
                </div>
                <div className='form__flex--inventory'>
                    <div>
                        <div className='padding__oneRem--inventory'>
                            <h1>Item Details</h1>
                        </div>
                        <label>
                            <span>Item Name </span><br/> 
                            <input type='text' name='itemName' placeholder='Item Name' />
                        </label>
                        <br />
                        <label>
                            <span>Description</span><br /> 
                            <textarea 
                                id='descBox--inventory' 
                                name='description' 
                                placeholder='Please enter a brief item description...'
                            />
                        </label>
                        <br />
                        <label htmlFor='category'>
                            <span>Category</span>
                        </label>
                        <br />
                        <select id='category' name="category">
                            <option value="" disabled selected>Please Select</option>
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
                                        onChange={handleStatusChange}
                                    /> In Stock
                                </label>
                                <label id='instockfalse'>
                                    <input 
                                        type='radio' 
                                        name='status' 
                                        value='out of stock' 
                                        onChange={handleStatusChange}
                                    /> Out of Stock
                                </label>
                            </div>
                        </label>
                        <br />
                        {status === 'in stock' && (
                            <label id='quantitysection'>
                                <span>Quantity</span> <br /> 
                                <input type='number' name='quantity' 
                                placeholder='0' id='quantityformfield'/>
                            </label>
                        )}
                        <br />
                        <label htmlFor='warehouse'>
                            <span>Warehouse</span> 
                        </label>
                        <br />
                        <select id='warehouse' name="warehouse">
                            <option value="" disabled selected>Please Select</option>
                            <option value="Manhattan">Manhattan</option>
                            <option value="Washington">Washington</option>
                            <option value="Jersey">Jersey</option>
                            <option value="San Fran">San Fran</option>
                            <option value="Santa Monica">Santa Monica</option>
                            <option value="Seattle">Seattle</option>
                            <option value="Miami">Miami</option>
                        </select>
                    </div>
                </div>

                <div className='newInventory__submit'>
                    <div>Cancel</div>
                    <button>+ Add Item</button>
                </div>
            </div>
        </form>
    );
};

export default NewInventory;
