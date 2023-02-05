import {useState} from "react";

import NavTitle from "../../components/NavTitle/NavTitle";
import FieldForm from "../../components/Form/FieldForm";
import customerService from "../api/services/customerService";
import TabForm from "../../components/TabForm/TabForm";
import AddressForm from "../../components/Form/AddressForm";


const CustomerRegistry = () => {


    const [credit, setCredit] = useState({
        creditLimit: 0.0,
        creditLimitExceeded: false
    })

    const [customer, setCustomer] = useState({
        name: "",
        email: "",
        phone: "",
        otherInformations: "",
        situation: "select",
        companyType: "select",

        // Cliente Fisico
        cpf: '',

        // Cliente Juridico
        fantasyName: "",
        cnpj: "",
        razaoSocial: "",
        inscricaoEstadual: "",
        contactName: "",
    })

    const [address, setAddress] = useState([])




    const handleCustomer = (e) => {
        setCustomer({
            ...customer,
            [e.target.name]: e.target.value
        });
    }


    const handleCredit = (e) => {

       var actualValue = credit[e.target.name];
       var newValue = (e.target.name === 'creditLimitExceeded') ? !actualValue : e.target.value;

        setCredit({
            ...credit,
            [e.target.name]: newValue
        });
    }


    const saveCustomer = () => {

        let data = {
            ...credit,
            generalInformation: {
                ...customer
            },
            addresses: address
        }
        console.log(data)

        return customerService.createNewCustomer(data)
            .then(() => {
                setCustomer({
                    name: "",
                    email: "",
                    phone: "",
                    otherInformations: "",
                    situation: "select",
                    companyType: "select",
                    cpf: '',
                    fantasyName: "",
                    cnpj: "",
                    razaoSocial: "",
                    inscricaoEstadual: "",
                    contactName: "",
                });
                setCredit({
                    creditLimit: 0.0,
                    creditLimitExceeded: false
                });
                setAddress([])

            }).catch((err) => {
                console.log(err);
            });
    }


    return (
        <>
            <NavTitle
                title="Add Customer"
                path={[
                    {name: "Home", link: "/"},
                    {name: "Registry", link: "/registry"},
                    {name: "Customer", link: "/registry/customer"}
                ]}
            />


            <div className="content">
                <TabForm
                    tabs={[
                        {
                            label: 'General Informations',
                            content: (
                                <>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <h3>
                                                <i className="fa fa-address-card" aria-hidden="true"></i>
                                                Customer Data
                                            </h3>
                                        </div>
                                    </div>

                                    {/* Tipo, Situação, Nome, Email */}
                                    <div className="row">
                                        <div className="col-md-3">
                                            <FieldForm
                                                label="Customer type"
                                                type="select"
                                                name='companyType'
                                                value={customer.companyType}
                                                onChange={(e) => handleCustomer(e)}
                                                options={[
                                                    {value: "PERSON", label: "Person"},
                                                    {value: "COMPANY", label: "Company"},
                                                ]}
                                            />
                                        </div>

                                        <div className="col-md-3">
                                            <FieldForm
                                                label="Situation"
                                                type="select"
                                                name='situation'
                                                value={customer.situation}
                                                onChange={(e) => handleCustomer(e)}
                                                options={[
                                                    {value: "ACTIVE", label: "Active"},
                                                    {value: "INACTIVE", label: "Inactive"},
                                                ]}
                                            />
                                        </div>

                                        <div className="col-md-3">
                                            <FieldForm
                                                label="Name"
                                                type="text"
                                                name='name'
                                                value={customer.name}
                                                onChange={(e) => handleCustomer(e)}
                                            />
                                        </div>

                                        <div className="col-md-3">
                                            <FieldForm
                                                label="Email"
                                                type="email"
                                                name='email'
                                                value={customer.email}
                                                onChange={(e) => handleCustomer(e)}
                                            />
                                        </div>

                                        {
                                            customer.companyType === "PERSON" ? (
                                                <>
                                                    <div className="col-md-3">
                                                        <FieldForm
                                                            label="CPF"
                                                            type="text"
                                                            name="cpf"
                                                            value={customer.cpf}
                                                            onChange={(e) => handleCustomer(e)}
                                                        />
                                                    </div>
                                                </>
                                            ) : (
                                                customer.companyType === "COMPANY" && (
                                                    <>
                                                        <div className="col md 3">
                                                            <FieldForm
                                                                label="CNPJ"
                                                                type="text"
                                                                name="cnpj"
                                                                value={customer.cnpj}
                                                                onChange={(e) => handleCustomer(e)}
                                                            />
                                                        </div>

                                                        <div className="col-md-3">
                                                            <FieldForm
                                                                label="Razão Social"
                                                                type="text"
                                                                name="razaoSocial"
                                                                value={customer.razaoSocial}
                                                                onChange={(e) => handleCustomer(e)}
                                                            />
                                                        </div>

                                                        <div className="col-md-3">
                                                            <FieldForm
                                                                label="Fantasy Name"
                                                                type="text"
                                                                name="fantasyName"
                                                                value={customer.fantasyName}
                                                                onChange={(e) => handleCustomer(e)}
                                                            />
                                                        </div>

                                                        <div className="col-md-3">
                                                            <FieldForm
                                                                label="Inscrição Estadual"
                                                                type="text"
                                                                name="inscricaoEstadual"
                                                                value={customer.inscricaoEstadual}
                                                                onChange={(e) => handleCustomer(e)}
                                                            />
                                                        </div>

                                                        <div className="col-md-3">
                                                            <FieldForm
                                                                label="Contact Name"
                                                                type="text"
                                                                name="contactName"
                                                                value={customer.contactName}
                                                                onChange={(e) => handleCustomer(e)}
                                                            />
                                                        </div>
                                                    </>
                                                )
                                            )
                                        }

                                        <div className="col-md-3">
                                            <FieldForm
                                                label="Phone"
                                                type="text"
                                                name="phone"
                                                value={customer.phone}
                                                onChange={(e) => handleCustomer(e)}
                                            />
                                        </div>

                                        <div className="col-md-3">
                                            <FieldForm
                                                label="CreditLimit"
                                                type="number"
                                                name="creditLimit"
                                                value={credit.creditLimit}
                                                onChange={(e) => handleCredit(e)}
                                            />
                                        </div>

                                        <div className="col-md-3 mt-4">
                                            <FieldForm
                                                label="CreditLimitExceeded"
                                                type="checkbox"
                                                name="creditLimitExceeded"
                                                value={credit.creditLimitExceeded}
                                                onChange={(e) => handleCredit(e)}
                                            />
                                        </div>

                                    </div>

                                    <div className="row">
                                        <div className="col-md-12">
                                            <FieldForm
                                                label="Other Informations"
                                                type="textarea"
                                                rows={4}
                                                name="otherInformations"
                                                value={customer.otherInformations}
                                                onChange={(e) => handleCustomer(e)}
                                            />
                                        </div>
                                    </div>
                                </>
                            )
                        },
                        {
                            label: 'Customer Address',
                            content: (
                                <>
                                    <AddressForm
                                        addressesList={address}
                                        setAddressesList={setAddress}
                                    />
                                </>
                            )
                        },
                    ]}
                />


                <div className="row">
                    <div className="col-md-12">
                        <div className="float-right">
                            <button onClick={saveCustomer} type="button" className="btn btn-success">
                                <i className="fa fa-save mr-12px"></i>
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CustomerRegistry
