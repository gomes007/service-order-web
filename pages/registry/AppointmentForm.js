import {useState} from "react";

const services = [
    { id: 1, name: 'Serviço 1', professionals: [1, 2] },
    { id: 2, name: 'Serviço 2', professionals: [3, 4] },
    { id: 3, name: 'Serviço 3', professionals: [1, 3, 4] },
];

const professionals = [
    { id: 1, name: 'Profissional 1' },
    { id: 2, name: 'Profissional 2' },
    { id: 3, name: 'Profissional 3' },
    { id: 4, name: 'Profissional 4' },
];

const AppointmentForm = ({ onSubmit }) => {
    const [selectedService, setSelectedService] = useState();
    const [selectedProfessional, setSelectedProfessional] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);

    const handleServiceChange = (event) => {
        const selectedServiceId = parseInt(event.target.value, 10);
        setSelectedService(selectedServiceId);
    };

    const handleProfessionalChange = (event) => {
        const selectedProfessionalId = parseInt(event.target.value, 10);
        setSelectedProfessional(selectedProfessionalId);
    };

    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
    };

    const handleTimeChange = (event) => {
        setSelectedTime(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({
            service: selectedService,
            professional: selectedProfessional,
            date: selectedDate,
            time: selectedTime,
        });
    };

    const filteredProfessionals = selectedService
        ? professionals.filter((professional) =>
            services.find((service) => service.id === selectedService)
                .professionals.includes(professional.id)
        )
        : professionals;

    return (
        <form onSubmit={handleSubmit}>

            <label htmlFor="service">Selecione um serviço:</label>
            <select class="form-select" id="service" onChange={handleServiceChange}>
                <option value="">Selecione um serviço</option>
                {services.map((service) => (
                    <option key={service.id} value={service.id}>
                        {service.name}
                    </option>
                ))}
            </select>
            <br />
            <label htmlFor="professional">Selecione um profissional:</label>
            <select id="professional" onChange={handleProfessionalChange}>
                <option value="">Selecione um profissional</option>
                {filteredProfessionals.map((professional) => (
                    <option key={professional.id} value={professional.id}>
                        {professional.name}
                    </option>
                ))}
            </select>
            <br />
            <label htmlFor="date">Selecione uma data:</label>
            <input type="date" id="date" onChange={handleDateChange} />
            <br />
            <label htmlFor="time">Selecione um horário:</label>
            <input type="time" id="time" onChange={handleTimeChange} />
            <br />
            <button type="submit">Agendar</button>
        </form>
    );
};
export default AppointmentForm;
