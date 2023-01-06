const TableSales = ({sales, setEditSale}) => {
    return (
        <div className="sales-table">
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>Quantity</th>
                    <th>Description</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {
                    sales?.map((sale, index) => {
                        return (
                            <tr key={index}>
                                <td>{sale.quantity}</td>
                                <td>{sale.description}</td>
                                <td>
                                    <button className="btn btn-primary"
                                        onClick={() => setEditSale({...sale, index})}>
                                            Edit
                                    </button>
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    )
}

export default TableSales
