import api from "./api";

const customerService = {
    async createNewCustomer(customer) {
        try {
            const response = await api.post("/customers", customer);
            return response.data ?? customer;
        } catch (error) {
            console.error("Customer Creation Request failure: ", error.message);
            return customer;
        }
    },
};

export default customerService;
