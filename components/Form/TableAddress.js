import Swal from "sweetalert2";

const TableAddress = ({addresses, setEditAddress, setDeleteAddress}) => {

    const handleDeleteAddress = (index) => {

        Swal.fire({
            title: 'Deseja excluir este endereço?',
            text: "Você não poderá reverter esta ação!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete'
        }).then((result) => {
            if (result.isConfirmed) {
                const newAddresses = addresses.filter((address, i) => i !== index);
                setDeleteAddress(newAddresses);
            }
        })
    }

    return (
        <div className="table-responsive tb">
            <table className="table table-striped">
                <thead>
                <tr>
                    <th scope="col">ZipCode</th>
                    <th scope="col">Address Type</th>
                    <th scope="col">Street</th>
                    <th scope="col">Number</th>
                    <th scope="col">Complement</th>
                    <th scope="col">Neighborhood</th>
                    <th scope="col">City</th>
                    <th scope="col">UF</th>
                    <th scope="col">Actions</th>
                </tr>
                </thead>
                <tbody>
                {
                    addresses?.map((address, index) => {
                        return (
                            <tr key={index}>
                                <td>{address.zipCode}</td>
                                <td>{address.addressType.label}</td>
                                <td>{address.street}</td>
                                <td>{address.number}</td>
                                <td>{address.complement}</td>
                                <td>{address.neighborhood}</td>
                                <td>{address.city}</td>
                                <td>{address.state}</td>
                                <td className='tableButtons'>
                                    <button className='btn btn-outline-dark'
                                            onClick={() => setEditAddress({...address, index})}>
                                        <i className="fa-solid fa-pen"></i>
                                    </button>
                                    <button className='btn btn-outline-danger'
                                            onClick={() => handleDeleteAddress(index)}>
                                        <i className="fa-solid fa-trash-can"></i>
                                    </button>
                                </td>
                            </tr>
                        );
                    })
                }
                </tbody>
            </table>
        </div>
    );
}

export default TableAddress

