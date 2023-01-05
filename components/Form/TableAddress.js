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
        <div className="addressTable">
            <table className="table table-striped">
                <thead>
                <tr>
                    <th scope="col">ZipCode</th>
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
                                <td>{address.street}</td>
                                <td>{address.number}</td>
                                <td>{address.complement}</td>
                                <td>{address.neighborhood}</td>
                                <td>{address.city}</td>
                                <td>{address.state}</td>
                                <td>
                                    <button className='btn btn-primary'
                                            onClick={() => setEditAddress({...address, index})}>
                                        Edit
                                    </button>
                                    <button className='btn btn-danger'
                                            onClick={() => handleDeleteAddress(index)}>
                                        Delete
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

