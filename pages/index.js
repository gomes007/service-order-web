import React from 'react';
import Bar from "../components/Charts/Bar";
import submitApi from '../config/submitApi';
import Pie from "../components/Charts/Pie";
import Line from "../components/Charts/Line";

const Home = ({vendasMes, vendasCategoria, vendasDia}) => {



    return (
        <>
            <div className="row">
                <div className="col-md-6">
                    <Bar vendasMes={vendasMes} />
                </div>

                <div className="col-md-6">
                    <Pie vendasCategoria={vendasCategoria} />
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <Line vendasDia={vendasDia} />
                    </div>
                </div>
            </div>
        </>
    )

}

export const getServerSideProps = async () => {

    const vendasMes = await submitApi('vendas/vendas-por-mes', 'GET');
    const vendasCategoria = await submitApi('vendas/vendas-por-categoria', 'GET');
    const vendasDia = await submitApi('vendas/vendas-por-dia', 'GET');

    return {
        props: {
            vendasMes,
            vendasCategoria,
            vendasDia
        }
    }
}


export default Home
