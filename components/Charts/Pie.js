import React from 'react';
import {Chart} from "react-google-charts";

const Pie = ({vendasCategoria}) => {

    const data = [
        ["Categoria", "Vendas"],
    ];


    vendasCategoria.forEach(venda => {
        data.push([venda.categoria, venda.valor]);
    });

    const options = {
        chart: {
            title: "Company Performance",
            pieHole: 0.4,
            is3D: false,
        },
    };

    return (
        <>
            <Chart
                chartType="PieChart"
                width="100%"
                height="400px"
                data={data}
                options={options}
            />
        </>
    )
}



export default Pie
