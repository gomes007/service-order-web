import FormSales from "../../components/drafts/FormSales";
import {useState} from "react";

const Form = () => {

    const [sale, setSale] = useState([])

    return (
        <div className="form-content-main">
            <h1>Form</h1>
            <FormSales
                salesList={sale}
                setSalesList={setSale}
            />


        </div>
        )
}

export default Form
