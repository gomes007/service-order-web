import { useEffect, useState } from "react";
import Chart from "react-google-charts";
import io from 'socket.io-client';

const Pie = ({vendasCategoria}) => {

    const [vendas, setVendas] = useState(vendasCategoria);
    const socket = io('http://localhost:8888', { transports : ['websocket'] });

    const data = [
        ["Categoria", "Vendas"],
    ];


    vendasCategoria.forEach(venda => {
        data.push([venda.categoria, venda.valor]);
    });


    useEffect(() => {
        socket.on('DADOS_GRAFICO', dados => {
            const data = [
                ["Categoria", "Vendas"],
            ];


            dados.forEach(venda => {
                data.push([venda.categoria, venda.valor]);
            });

            setVendas(data);
        });
    }, []);



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
                data={vendas}
                options={options}
            />

            {
                vendas.map(v => (
                    <p>{v[0]} - {v[1]}</p>
                ))
            }


        </>
    )
}



export default Pie
