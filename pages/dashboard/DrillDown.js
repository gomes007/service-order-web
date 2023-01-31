import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts';



const [data, setData] = useState([
    { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
    { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
]);
const [drillData, setDrillData] = useState(null);
const [data, setData] = useState([
    { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
    { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
]);
const [drillData, setDrillData] = useState(null);


const handleClick = (data) => {
    setDrillData(data);
};


return (
    <div>
        <BarChart
            width={500}
            height={300}
            data={drillData || data}
            margin={{
                top: 5, right: 30, left: 20, bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" onClick={handleClick} />
            <Bar dataKey="uv" fill="#82ca9d" onClick={handleClick} />
        </BarChart>
        <PieChart width={400} height={400}>
            <Pie
                data={drillData ? [drillData] : data}
                dataKey="value"
                cx={200}
                cy={200}
                innerRadius={60}
                outerRadius={80}
                fill="#82ca9d"
                label
            >
                <Cell />
            </Pie>
            <Tooltip />
        </PieChart>
    </div>
);



