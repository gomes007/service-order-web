import FormEnd from "../../components/Form/FormEnd";
import {useState} from "react";

const Form = () => {

    const [sale, setSale] = useState([])

    return (
        <div className="form-content-main">
            <h1>Form</h1>
            <FormEnd
                salesList={sale}
                setSalesList={setSale}
            />


        </div>
        )
}

export default Form
