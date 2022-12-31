import {useState} from "react";

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

    return (
        <>

                <div className="row">
                    <div className="col-md-3">
                        <label className="form-label">Company Type</label>
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
                        <label className="form-label">Situation</label>
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
                        <label className="form-label">Name</label>
                        <input type="text"
                               className="form-control"
                               id="name"
                               value={customer.generalInformation.name}
                               onChange={handleCustomerNameChange}
                        />
                    </div>

                </div>

        </>
)
}
export default Registry
