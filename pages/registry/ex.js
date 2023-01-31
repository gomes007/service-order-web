import React, { useState } from 'react';

const Ex = () => {
    const [addressType, setAddressType] = useState([]);
    const [address, setAddress] = useState({
        zipCode: '',
        street: '',
        number: '',
        neighborhood: '',
        city: '',
        state: '',
        complement: ''
    });

    const handleAddressType = (e) => {
        setAddressType([...addressType, e.target.value]);
    };

    const handleAddress = (e) => {
        setAddress({ ...address, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add logic to push data into a database or API
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="addressType">Address Type:</label>
                <select id="addressType" onChange={handleAddressType}>
                    <option value="">Select</option>
                    <option value="home">Home</option>
                    <option value="work">Work</option>
                </select>
                <br />
                <label htmlFor="zipCode">Zip Code:</label>
                <input
                    type="text"
                    name="zipCode"
                    id="zipCode"
                    value={address.zipCode}
                    onChange={handleAddress}
                />
                <br />
                <label htmlFor="street">Street:</label>
                <input
                    type="text"
                    name="street"
                    id="street"
                    value={address.street}
                    onChange={handleAddress}
                />
                <br />
                <label htmlFor="number">Number:</label>
                <input
                    type="text"
                    name="number"
                    id="number"
                    value={address.number}
                    onChange={handleAddress}
                />
                <br />
                <button type="submit">Submit</button>
            </form>
            <table>
                <thead>
                <tr>
                    <th>Address Type</th>
                    <th>Zip Code</th>
                    <th>Street</th>
                    <th>Number</th>
                </tr>
                </thead>
                <tbody>
                {addressType.map((type, index) => (
                    <tr key={index}>
                        <td>{type}</td>
                        <td>{address.zipCode}</td>
                        <td>{address.street}</td>
                        <td>{address.number}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default Ex;
