import React from 'react';
import {Chart} from "react-google-charts";

const Line = ({vendasDia}) => {

    const data = [
        ["Ano", "Valor"],
    ];


    vendasDia.forEach(venda => {
        data.push([venda.dia, venda.valor]);
    });

    const options = {
        title: "Company Performance",
        curveType: "function",
        legend: { position: "bottom" },
        colors:['red'],
    };

    return (
        <>
            <Chart
                chartType="LineChart"
                width="100%"
                height="400px"
                data={data}
                options={options}
            />
        </>
    )
}


export default Line
