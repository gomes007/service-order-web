import {useState} from "react";
import FieldForm from "./FieldForm";
import TableSales from "./TableSales";

const FormEnd = ({salesList, setSalesList}) => {


    const [sale, setSale] = useState({
        quantity: '',
        description: ''
    });

    const handleSale = (e) => {
        setSale({
            ...sale,
            [e.target.name]: e.target.value
        });
    }

    const handleAddSale = () => {
        let newSales = salesList;

        if(newSales !== undefined && newSales.length > 0) {
            newSales.push(sale);
        } else {
            newSales = [sale];
        }

        setSalesList(newSales);

        setSale({
            quantity: '',
            description: ''
        })
    }


    const handleEditSale = () => {
      let newSales = salesList;

      if (sale.index !== undefined){
          newSales[sale.index] = sale;
      }

        setSalesList(newSales);

        setSale({
            quantity: '',
            description: ''
        })
    }

    const handleAddEditSale = () => {
        let newSales = salesList;

        if (sale.index !== undefined){
            newSales[sale.index] = sale; //edit
        } else {
            if(newSales !== undefined && newSales.length > 0) {
                newSales.push(sale);
            } else {
                newSales = [sale];
            }
        }

        setSalesList(newSales);

        setSale({
            quantity: '',
            description: ''
        })
    }


    return (
        <div className="content-end">
            <div className="row">
                <div className="col-md-3">
                    <FieldForm
                        label='Quantity'
                        type='number'
                        name='quantity'
                        value={sale?.quantity}
                        onChange={(e) => handleSale(e)}/>
                </div>
                <div className="col-md-3">
                    <FieldForm
                        label='Description'
                        type='text'
                        name='description'
                        value={sale?.description}
                        onChange={(e) => handleSale(e)}/>
                </div>
            </div>

            {/*{sale.index !== undefined && (*/}
            {/*    <input type="hidden" name="index" value={sale.index} />*/}
            {/*)}*/}

            <div className="col-md-3">
                <button className="btn btn-primary" onClick={() => handleAddEditSale()}>
                    {sale.index === undefined ? 'Add' : 'Edit'}
                </button>
            </div>

            <div className="row">
                <TableSales
                    sales={salesList}
                    setEditSale={setSale} //after click on button edit send data to the value. ex: value={sale?.quantity}
                />
            </div>
        </div>
    );
}

export default FormEnd
