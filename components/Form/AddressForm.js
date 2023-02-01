import React, {useEffect, useState} from "react";
import FieldForm from "./FieldForm";
import TableAddress from "./TableAddress";
import axios from "axios";

const AddressForm = ({addressesList, setAddressesList}) => {

    const [address, setAddress] = useState({
        zipCode: '',
        street: '',
        number: '',
        neighborhood: '',
        city: '',
        state: '',
        complement: ''
    });

    const [addressType, setAddressType] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/address/types')
            .then(res => {
                setAddressType(res.data);
            });
    }, []);


    const handleAddress = (e) => {
        setAddress({
            ...address,
            [e.target.name]: e.target.value
        })
        console.log(address)
        if (e.target.name === "addressTypeId") {
            setAddress({
                ...address,
                addressTypeId: e.target.value
            });
        }


        if (e.target.name === 'zipCode' && e.target.value.length === 8) {
            fetch(`https://viacep.com.br/ws/${e.target.value}/json/`)
                .then(response => response.json())
                .then(data => {
                    setAddress({
                        ...address,
                        zipCode: data.cep,
                        street: data.logradouro,
                        neighborhood: data.bairro,
                        city: data.localidade,
                        state: data.uf
                    });
                });
        }
    }

    // const handleAddAddress = () => {
    //     let newAddresses = addressesList;
    //
    //     if (address.index !== undefined) {
    //         newAddresses[address.index] = address; //to edit if exist
    //     } else {
    //         if (newAddresses !== undefined && newAddresses.length > 0) {
    //             newAddresses.push(address);
    //         } else {
    //             newAddresses = [address]
    //         }
    //     }
    //
    //     setAddressesList(newAddresses);
    //
    //     setAddress({
    //         zipCode: '',
    //         street: '',
    //         number: '',
    //         neighborhood: '',
    //         city: '',
    //         state: '',
    //         complement: ''
    //     });
    // }


    const handleAddAddress = () => {
        let newAddresses = addressesList;
        let selectedAddressType = addressType.find(type => type.id === parseInt(address.addressTypeId));
        delete address.addressTypeId
        if (address.index !== undefined) {
            newAddresses[address.index] = {...address, addressType: selectedAddressType}; //to edit if exist
        } else {
            if (newAddresses !== undefined && newAddresses.length > 0) {
                newAddresses.push({...address, addressType: selectedAddressType});
            } else {
                newAddresses = [{...address, addressType: selectedAddressType}]
            }
        }

        setAddressesList(newAddresses);

        console.log(addressesList)

        setAddress({
            zipCode: '',
            street: '',
            number: '',
            neighborhood: '',
            city: '',
            state: '',
            complement: ''
        });
    }





    return (
        <>
            <div className="row">
                <div className="col-md-12">
                    <h3>
                        <i className="fa fa-list-alt margin-right-5px"></i>
                        <span>Address</span>
                    </h3>
                </div>
            </div>

            <div className="address-form">
                <div className="row">
                    <>
                        <div className="col-md-3">
                            {/*<AddressType*/}
                            {/*    address={address}*/}
                            {/*    setAddress={setAddress}*/}
                            {/*/>*/}
                            <label htmlFor="addressType">Address Type:</label>
                            <select className="form-control" name="addressTypeId" id="addressType" onChange={(e) => handleAddress(e)}>
                                <option value="">Select an address type</option>
                                {addressType && addressType.length > 0 && addressType.map(addressType => (
                                    <option key={addressType.id} value={addressType.id}>{addressType.label}</option>
                                ))}
                            </select>
                        </div>

                        <div className="col-md-2">
                            <FieldForm
                                label="ZipCode"
                                type="text"
                                name="zipCode"
                                value={address?.zipCode}
                                onChange={(e) => handleAddress(e)}e
                            />
                        </div>

                        <div className="col-md-5">
                            <FieldForm
                                label="Street"
                                type="text"
                                name="street"
                                value={address?.street}
                                onChange={(e) => handleAddress(e)}
                            />
                        </div>

                        <div className="col-md-2">
                            <FieldForm
                                label="Number"
                                type="number"
                                name="number"
                                value={address?.number}
                                onChange={(e) => handleAddress(e)}
                            />
                        </div>

                        <div className="col-md-3">
                            <FieldForm
                                label="Complement"
                                type="text"
                                name="complement"
                                value={address?.complement}
                                onChange={(e) => handleAddress(e)}
                            />
                        </div>

                        <div className="col-md-3">
                            <FieldForm
                                label="Neighborhood"
                                type="text"
                                name="neighborhood"
                                value={address?.neighborhood}
                                onChange={(e) => handleAddress(e)}
                            />
                        </div>


                        <div className="col-md-3">
                            <FieldForm
                                label="City"
                                type="text"
                                name="city"
                                value={address?.city}
                                onChange={(e) => handleAddress(e)}
                            />
                        </div>

                        <div className="col-md-3">
                            <FieldForm
                                label="State"
                                type="text"
                                name="state"
                                value={address?.state}
                                onChange={(e) => handleAddress(e)}
                            />
                        </div>
                    </>
                </div>

                {address.index !== undefined && (
                    <input type='hidden' name='index' value={address.index}/>
                )}

                <div className="buttonAddEdit">
                    <button className="btn btn-outline-secondary"
                            onClick={() => handleAddAddress()}>
                        {address.index === undefined ? 'Add' : 'Edit'}
                    </button>
                </div>
            </div>

            <TableAddress
                addresses={addressesList}
                setEditAddress={setAddress}
                setDeleteAddress={setAddressesList}
                addressType={addressType}
            />
        </>
    )
}

export default AddressForm
