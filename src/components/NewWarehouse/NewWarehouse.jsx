import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { baseUrl } from '../../../utils/utils';
import './NewWarehouse.scss';
import arrowBack from '../../assets/Icons/arrow_back-24px.svg';



const NewWarehouse = () => {

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formData = {
            form: e.target,
            warehouseName: e.target.warehouseName.value,
            streetAddress: e.target.streetAddress.value,
            city: e.target.city.value,
            country: e.target.country.value,
            contactName: e.target.contactName.value,
            position: e.target.position.value,
            phoneNumber: e.target.phoneNumber.value,
            email: e.target.email.value
        };
    
        // Validation
        if (Object.values(formData).some(value => value === "")) {
            alert("Please fill all fields");
            return;
        }
    
        try {
            const response = await fetch('baseUrl/warehouses', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });
    
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
    
            const data = await response.json();
            // Handle successful submission (e.g., redirect or show success message)
            console.log('Success:', data);
            
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to add warehouse');
        }
    };


    return (
        <>
        <form onSubmit={handleSubmit} className='newWarehouseFlex'>
            <div>
                <div className='addNewWarehouse__flex'>
                    <img src={arrowBack} alt="" />
                    <h1>Add New Warehouse</h1>
                </div>
                <div className='form__flex'>
                    <div>
                        <div className='padding__oneRem'>
                            <h2>Warehouse Details</h2>
                        </div>
                        <label>
                            <span>Warehouse Name </span><br/> <input type='text' name='warehouseName' placeholder='Warehouse name'/>
                        </label>
                        <br />
                        <label>
                            <span>Street Address</span>
                            <br /> 
                            <input type='text' name='streetAddress' placeholder='street address'/>
                        </label>
                        <br />
                        <label>
                            <span>City</span> <br /><input type='text' name='city' placeholder='City'/>
                        </label>
                        <br />
                        <label>
                            <span>Country</span> <br /> <input type='text' name='country' placeholder='Country'/>
                        </label>
                    </div>
                    <div>
                        <div className='padding__oneRem'>
                            <h2>Contact Details</h2>
                        </div>
                        <label>
                            <span>Contact Name</span> <br /><input type='text' name='contactName' placeholder='Contact Name'/>
                        </label>
                        <br />
                        <label>
                            <span>Position</span> <br /> <input type='text' name='position' placeholder='Position'/>
                        </label>
                        <br />
                        <label>
                            <span>Phone Number</span> <br /> <input type='text' name='phoneNumber' placeholder='Phone Number'/>
                        </label>
                        <br />
                        <label>
                            <span>Email</span> <br /> <input type='text' name='email' placeholder='Email'/>
                        </label>
                    </div>
                </div>

                <div className='newWarehouse__submit'>
                    <div>Cancel</div>
                    <button>+ Add Warehouse</button>
                </div>
            </div>
        </form>
        </>
    );
}

export default NewWarehouse;