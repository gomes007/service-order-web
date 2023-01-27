import React from 'react';
import { Chart } from "react-google-charts";
import submitApi from "../../config/submitApi";

const Bar = ({vendasMes}) => {

    const data = [
        ["Ano", "Vendas", "Lucro"],
    ];


    vendasMes.forEach(venda => {
        data.push([venda.mes, venda.valor, (venda.valor * 0.2)]);
    });

    const options = {
        chart: {
            title: "Company Performance",
            subtitle: "Sales, Expenses, and Profit: 2014-2017",
            backgroundColor: {
                fill: '#000'
            }
        },
        bars: 'horizontal',
        hAxis: {format: 'decimal'},
        height: 400,
        annotations: {
            alwaysOutside: true,
            textStyle: {
                fontSize: 14,
                color: 'black',
                auraColor: 'none'
            }
        },
        colors: ['#1b9e77']
    };

    return (
        <>
            <Chart
                chartType="Bar"
                width="100%"
                height="400px"
                data={data}
                options={options}
            />
        </>
    )
}

export const getServerSideProps = async () => {
    const vendasMes = await submitApi('vendas/vendas-por-mes', 'GET');
    return {
        props: {
            vendasMes
        }
    }
}


export default Bar
