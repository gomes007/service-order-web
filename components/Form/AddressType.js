import {useState} from "react";
import Modal from "../Modal/Modal";

const AddressType = ({address, setAddress}) => {

    const [selectOpen, setSelectOpen] = useState(false);
    const [addressType, setAddressType] = useState([]);


    const [modalType, setModalType] = useState(false);
    const [saveType, setSaveType] = useState("");


    const handleModalType = () => {
      setModalType(!modalType);
      setSelectOpen(false);
    }


    const handleAddType = () => {
        let newAddressType = addressType;
        newAddressType.push(saveType);
        setAddressType(newAddressType);
        setSaveType("");
        handleModalType();
    }


    const handleSelect = (type) => {
        setAddress({...address, addressType: type});
        setSelectOpen(false);
    }


    return (
        <>
            <div className="form-group">
                <label htmlFor="type">Address Type</label>
                <div className="select-btn">
                    <div className="selectedItem" onClick={() => setSelectOpen(!selectOpen)}>
                        <span>{address.addressType === "" ? "Select a type" : address.addressType}</span>
                        <i className="fa fa-angle-down"></i>
                    </div>
                    <div className={selectOpen === false ? 'items' : 'items open'}>
                        <ul>
                            {addressType.map((type, index) => (
                                <li key={index}
                                    className={address.addressType === type ? 'checked' : ''}
                                    onClick={() => handleSelect(type)}>
                                    {type}
                                </li>
                            ))}
                            <li className="btn-add" onClick={() => handleModalType()}>
                                <i className="fa fa-plus"></i>
                                Add
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <Modal show={modalType} onHide={() => handleModalType()}>
                <div className="content">
                    <h3 className="text-center">Add Type</h3>

                    <div className="form-group">
                        <label htmlFor="type">Address Type</label>
                        <input type="text" value={saveType} onChange={(e) => setSaveType(e.target.value)}  className="form-control" />
                    </div>
                </div>

                <div className="btns text-center">
                    <button className="btn btn-secondary m-1" onClick={() => handleModalType()}>Cancel</button>
                    <button className="btn btn-primary m-1" onClick={() => handleAddType()} >Save</button>
                </div>
            </Modal>


        </>
    )
}

export default AddressType
