import React from 'react';
import GraficoLinhaSocket from '../components/Charts/GraficoLinhaSocket';
import GraficoPizza from "../components/Charts/GraficoPizza";


const Home = () => {

    return (
        <>
            <div className="row">
                <div className="col-md-8">
                    <GraficoLinhaSocket />
                </div>

                <div className="col-md-4">
                    <GraficoPizza/>
                </div>

            </div>
        </>
    )
}


export default Home
