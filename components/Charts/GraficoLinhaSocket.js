import { useEffect, useState } from "react";
import Chart from "react-google-charts";
import io from 'socket.io-client';
import submitApi from "../../config/submitApi";



const GraficoLinhaSocket = ({h = "300px"}) => {

    const [vendas, setVendas] = useState({});
    const socket = io('http://localhost:8888', { transports : ['websocket'] });

    let dadosBase = null;

    useEffect(() => {
        socket.on('DADOS_GRAFICO', dados => {
            console.log(dados);
            let data = [
                ["Ano", "Vendas"],
            ];

            dados.forEach(v => {
                data.push([v.mes, v.valor]);
            });

            if(JSON.stringify(data) !== JSON.stringify(dadosBase)) {
                setVendas(data);
            }
        });

        submitApi('/vendas/vendas-por-mes', "GET")
            .then(response => {
                let data = [
                    ["Ano", "Vendas"],
                ];

                response.forEach(v => {
                    data.push([v.mes, v.valor]);
                });

                setVendas(data);
            })

    }, []);

    const options = {
        title: 'Company Performance',
        hAxis: {title: 'Year',  titleTextStyle: {color: '#333'}},
        backgroundColor: '#ffd700',
        bar: {textPosition: 'auto'}
    };



    return (
        <>
            <Chart
                chartType="Bar"
                width="100%"
                height="400px"
                data={vendas}
                options={options}
            />
        </>
    );
}

export default GraficoLinhaSocket;
