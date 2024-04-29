
import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarChart = ({ chartData }) => {
    return (
        <div className="chart-container">
        <h2 style={{ textAlign: "center" }}>Bar Chart</h2>
        <Bar
            data={chartData}
            options={{
            indexAxis: 'y',
            plugins: {
                title: {
                display: true,
                text: 'Users Gained and Lost between 2016-2020',
                font: {
                    size: 20
                }
                }
            }
            }}
        />
        </div>
    );
};

export default BarChart;
