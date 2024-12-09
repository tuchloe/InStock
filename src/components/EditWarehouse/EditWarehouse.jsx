import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { baseUrl } from '../../../utils/utils';
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
            const response = await fetch(`${API_URL}/api/warehouses/${id}`, {
                method: 'PUT',
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
            navigate('/warehouses');
        } catch (error) {
            console.error('Error:', error);
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
                        <img src={arrowBack} alt="" />
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
                        <button type="button" id='editWarehouse__cancel-button' onClick={() => navigate('/warehouses')}>
                            Cancel
                        </button>
                        <button>Save</button>
                    </div>
                </div>
            </form>
        </>
    );
}

export default EditWarehouse;
