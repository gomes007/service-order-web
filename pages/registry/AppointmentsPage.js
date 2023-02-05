import React from 'react';
import AppointmentForm from './AppointmentForm';

const AppointmentsPage = () => {
    const handleSubmit = (values) => {
        console.log(values);
    };

    return (
        <div>
            <AppointmentForm onSubmit={handleSubmit} />
        </div>
    );
};

export default AppointmentsPage;
