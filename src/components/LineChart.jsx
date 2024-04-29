
import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = ({ chartData }) => {
    return (
        <div className="chart-container">
        <h2 style={{ textAlign: "center" }}>Line Chart</h2>
        <Line
            data={chartData}
            options={{
            plugins: {
                title: {
                display: true,
                text: 'User Growth Trend',
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

export default LineChart;
