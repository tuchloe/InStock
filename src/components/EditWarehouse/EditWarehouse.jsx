import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './EditWarehouse.scss';
import arrowBack from '../../assets/Icons/arrow_back-24px.svg';

const API_URL = import.meta.env.VITE_APP_API_URL;

const EditWarehouse = () => {
    const { id } = useParams();
    const [warehouse, setWarehouse] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchWarehouseData = async () => {
            try {
                const response = await fetch(`${API_URL}/api/warehouses/${id}`);
                if (!response.ok) {
                    throw new Error('Warehouse not found');
                }
                const data = await response.json();
                setWarehouse(data);
            } catch (error) {
                console.error('Error fetching warehouse:', error);
                alert('Failed to load warehouse data');
            }
        };
        fetchWarehouseData();
    }, [id]);


    const handleSubmit = async (e) => {
        e.preventDefault();

        const isValidPhoneNumber = (phone) => {
            const validPhone = /^\+?(\d{1,4})?[-.\s]?(\(?\d{1,4}\)?[-.\s]?)?(\d{1,4}[-.\s]?)*\d{1,4}$/;
            return validPhone.test(phone);
        };
        
        const isValidEmail = (email) => {
            const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return validEmail.test(email);
        };

        const formData = {
            warehouse_name: e.target.warehouseName.value.trim(),
            address: e.target.streetAddress.value.trim(),
            city: e.target.city.value.trim(),
            country: e.target.country.value.trim(),
            contact_name: e.target.contactName.value.trim(),
            contact_position: e.target.position.value.trim(),
            contact_phone: e.target.phoneNumber.value.trim(),
            contact_email: e.target.email.value.trim()
        };
    
        if (Object.values(formData).some(value => !value)) {
            alert('Please fill all fields');
            return;
        }
    
        if (!isValidPhoneNumber(formData.contact_phone)) {
            alert('Invalid phone number');
            return;
        }
    
        if (!isValidEmail(formData.contact_email)) {
            alert('Invalid email address');
            return;
        }
    
        try {
            console.log('Sending data:', formData);
    
            const response = await fetch(`${API_URL}/api/warehouses/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
    
            if (!response.ok) {
                const errorDetails = await response.json();
                console.error('Error details:', errorDetails);
                throw new Error('Network response was not ok');
            }
    
            const data = await response.json();
            console.log('Success:', data);
            navigate('/');
        } catch (error) {
            console.error('Error updating warehouse:', error);
            alert('Failed to update warehouse');
        }
    };
    

    if (!warehouse) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <form onSubmit={handleSubmit} className='editWarehouseFlex'>
                <div className='editWarehouse__window'>
                    <div className='editWarehouse__flex'>
                        <a href="/">
                        <img src={arrowBack} alt="" />
                        </a>
                        <h1>Edit Warehouse</h1>
                    </div>
                    <div className='form__flex'>
                        <div className='warehouse-details__left'>
                            <div className='padding__oneRem'>
                                <h2>Warehouse Details</h2>
                            </div>
                            <label>
                                <span>Warehouse Name </span><br />
                                <input type='text' name='warehouseName' defaultValue={warehouse.warehouse_name} placeholder='Warehouse Name' />
                            </label>
                            <br />
                            <label>
                                <span>Street Address</span>
                                <br />
                                <input type='text' name='streetAddress' defaultValue={warehouse.address} placeholder='Street Address' />
                            </label>
                            <br />
                            <label>
                                <span>City</span> <br />
                                <input type='text' name='city' defaultValue={warehouse.city} placeholder='City' />
                            </label>
                            <br />
                            <label>
                                <span>Country</span> <br />
                                <input type='text' name='country' defaultValue={warehouse.country} placeholder='Country' />
                            </label>
                        </div>
                        <div>
                            <div className='padding__oneRem'>
                                <h2>Contact Details</h2>
                            </div>
                            <label>
                                <span>Contact Name</span> <br />
                                <input type='text' name='contactName' defaultValue={warehouse.contact_name} placeholder='Contact Name' />
                            </label>
                            <br />
                            <label>
                                <span>Position</span> <br />
                                <input type='text' name='position' defaultValue={warehouse.contact_position} placeholder='Position' />
                            </label>
                            <br />
                            <label>
                                <span>Phone Number</span> <br />
                                <input type='text' name='phoneNumber' defaultValue={warehouse.contact_phone} placeholder='Phone Number' />
                            </label>
                            <br />
                            <label>
                                <span>Email</span> <br />
                                <input type='text' name='email' defaultValue={warehouse.contact_email} placeholder='Email' />
                            </label>
                        </div>
                    </div>

                    <div className='editWarehouse__submit'>
                        <button type="button" id='editWarehouse__cancel-button' onClick={() => navigate('/')}>
                            Cancel
                        </button>
                        <button onClick={() => navigate('/')}>Save</button>
                    </div>
                </div>
            </form>
        </>
    );
}

export default EditWarehouse;
