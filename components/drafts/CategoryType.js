import {useState} from "react";
import Modal from "../Modal/Modal";

const CategoryType = ({category, setCategory}) => {

    const [selectOpen, setSelectOpen] = useState(false);
    const [categoryType, setCategoryType] = useState([]);


    const [modalType, setModalType] = useState(false);
    const [saveType, setSaveType] = useState("");


    const handleModalType = () => {
        setModalType(!modalType);
        setSelectOpen(false);
    }


    const handleAddType = () => {
        let newCategoryType = categoryType;
        newCategoryType.push(saveType);
        setCategoryType(newCategoryType);
        setSaveType("");
        handleModalType();
    }


    function pickedFromList(type) {
        setCategory({
            ...category,
            categoryType: type
        });
        setSelectOpen(false);
    }

    return (
        <>
            <div className="form-group">
                <label htmlFor="type">Address Type</label>
                <div className="select-btn">
                    <div className="selectedItem" onClick={() => setSelectOpen(!selectOpen)}>
                        <span>{category.categoryType === "" ? "Select a type" : category.categoryType}</span>
                        <i className="fa fa-angle-down"></i>
                    </div>
                    <div className={selectOpen === false ? 'items' : 'items open'}>
                        <ul>
                            {
                                categoryType.map((type, index) => (
                                    <li key={index} onClick={() => pickedFromList(type)}>{type}</li>
                                ))
                            }


                            <li className="btn-add" onClick={() => handleModalType()}>
                                <i className="fa fa-plus"></i>
                                Add
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <Modal show={modalType}>
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

export default CategoryType
