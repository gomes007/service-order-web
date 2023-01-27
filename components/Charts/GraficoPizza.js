import { useEffect, useState } from "react";
import Chart from "react-google-charts";
import io from 'socket.io-client';
import submitApi from "../../config/submitApi";

const GraficoPizza = ({h = "280px"}) => {

    const [vendas, setVendas] = useState({});
    const socket = io('http://localhost:8888', { transports : ['websocket'] });

    const options = {
        title: "Vendas por categoria",
        pieHole: 0.4,
        is3D: false,
        fontSize: 11,
        backgroundColor: 'grey',
        width: "100%",
        sliceVisibilityThreshold: 0,
        legend: 'left',
        height: 400,
    };

    let dadosBase = null;


    useEffect(() => {
        socket.on('DADOS_CATEGORIA', dados => {
            let data = [
                ["Categoria", "Vendas"],
            ];

            dados.forEach(v => {
                data.push([v.categoria, v.valor]);
            });

            if(JSON.stringify(data) !== JSON.stringify(dadosBase)) {
                setVendas(data);
            }

        });

        submitApi('/vendas/vendas-por-categoria', "GET")
            .then(response => {
                let data = [
                    ["Categoria", "Vendas"],
                ];

                response.forEach(v => {
                    data.push([v.categoria, v.valor]);
                });

                setVendas(data);
            })
    }, []);


    return (
        <>
            <Chart
                chartType="PieChart"
                width="100%"
                height={h}
                data={vendas}
                options={options}
            />
        </>
    );
}

export default GraficoPizza;
