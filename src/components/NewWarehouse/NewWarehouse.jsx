import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { baseUrl } from '../../../utils/utils';
import './NewWarehouse.scss';
import arrowBack from '../../assets/Icons/arrow_back-24px.svg';



const NewWarehouse = () => {
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formData = {
            warehouse_name: e.target.warehouseName.value,
            address: e.target.streetAddress.value,
            city: e.target.city.value,
            country: e.target.country.value,
            contact_name: e.target.contactName.value,
            contact_position: e.target.position.value,
            contact_phone: e.target.phoneNumber.value,
            contact_email: e.target.email.value
        };

        if (Object.values(formData).some(value => value === "")) {
            alert("Please fill all fields");
            return;
        }
    
        try {
            const response = await fetch(`${baseUrl}api/warehouses`, {
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
            console.log('Success:', data);

            navigate("/");
            
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to add warehouse');
        }
    };


    return (
        <>
        <form onSubmit={handleSubmit} className='newWarehouseFlex'>
            <div className='newWarehouse__window'>
                <div className='addNewWarehouse__flex'>
                        <a href="/">
                            <img src={arrowBack} alt="" />
                        </a>
                    <h1>Add New Warehouse</h1>
                </div>
                <div className='form__flex'>
                    <div className='warehouse-details__left'>
                        <div className='padding__oneRem'>
                            <h2>Warehouse Details</h2>
                        </div>
                        <label>
                            <span>Warehouse Name </span><br/> <input type='text' name='warehouseName' placeholder='Warehouse Name'/>
                        </label>
                        <br />
                        <label>
                            <span>Street Address</span>
                            <br /> 
                            <input type='text' name='streetAddress' placeholder='Street Address'/>
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

                    <Link to="/">
                        <button type="button" id='newWarehouse__cancel-button'>Cancel</button>
                    </Link>
                    <button onClick={() => navigate('/')}>+ Add Warehouse</button>
                </div>
            </div>
        </form>
        </>
    );
}

export default NewWarehouse;