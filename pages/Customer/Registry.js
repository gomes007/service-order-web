import {useState} from "react";
import customerService from "../api/services/customerService";

const Registry = () => {

    const [customer, setCustomer] = useState({
        creditLimit: 0.0,
        creditLimitExceeded: false,
        generalInformation: {
            name: "",
            email: "",
            cpf: "",
            phone: "",
            otherInformations: "",
            situation: null,
            companyType: null,
        },
        addresses: [],
    });

    const handleCompanyTypeChange = (e) =>
        setCustomer((oldCustomer) => {
            oldCustomer.generalInformation.companyType = e.target.value;
            return oldCustomer;
        });


    const handleSituationChange = (e) =>
        setCustomer((oldCustomer) => {
            oldCustomer.generalInformation.situation = e.target.value;
            return oldCustomer;
        });

    const handleCustomerNameChange = (e) =>
        setCustomer((oldCustomer) => {
            oldCustomer.generalInformation.name = e.target.value;
            return oldCustomer;
        });

    const handleCustomerEmailChange = (e) =>
        setCustomer((oldCustomer) => {
            oldCustomer.generalInformation.email = e.target.value;
            return oldCustomer;
        });

    const handleCustomerOtherInfoChange = (e) =>
        setCustomer((oldCustomer) => {
            oldCustomer.generalInformation.otherInformations = e.target.value;
            return oldCustomer;
        });

    const saveCustomer = () => {
        return customerService.createNewCustomer(customer)
            .then(() => {
                console.log(customer);
            }).catch((err) => {
                console.log(err);
            });
    }


    return (
        <>
            <br/>

            <div className="row">
                <div className="col-md-3">
                    <label className="form-label">Company Type:</label>
                    <select className="form-select"
                            aria-label="Default select example"
                            value={customer.generalInformation.companyType}
                            onChange={handleCompanyTypeChange}>
                        <option>Select</option>
                        <option value="PERSON">Pessoa Fisica</option>
                        <option value="COMPANY">Pessoa Juridica</option>
                    </select>
                </div>

                <div className="col-md-3">
                    <label className="form-label">Situation:</label>
                    <select className="form-select"
                            aria-label="Default select example"
                            value={customer.generalInformation.situation}
                            onChange={handleSituationChange}>
                        <option>Select</option>
                        <option value="ACTIVE">Active</option>
                        <option value="INACTIVE">Inactive</option>
                    </select>
                </div>

                <div className="col-md-3">
                    <label className="form-label">Name:</label>
                    <input type="text"
                           className="form-control"
                           id="name"
                           value={customer.generalInformation.name.value}
                           onChange={handleCustomerNameChange}/>
                </div>

                <div className="col-md-3">
                    <label className="form-label">Email:</label>
                    <input type="email"
                           className="form-control"
                           id="email"
                           onChange={handleCustomerEmailChange}
                           value={customer.generalInformation.email.value}/>
                </div>
            </div>

            <br/>

            <div className="col-md-6">
                <label className="form-label">Other Informations:</label>
                <textarea
                       className="form-control"
                       id="info"
                       rows="3"
                       onChange={handleCustomerOtherInfoChange}
                       value={customer.generalInformation.otherInformations.value}/>
            </div>

            <br/>

            <div className="col-md-3">
                <button onClick={saveCustomer} type="button" className="btn btn-primary">Save</button>
            </div>

        </>
    )
}
export default Registry
