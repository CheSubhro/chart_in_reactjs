import React, { useState, useEffect } from 'react';
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Data } from '../src/utils/Data';
import PieChart from '../src/components/PieChart';
import BarChart from './components/BarChart';
import LineChart from './components/LineChart'

Chart.register(CategoryScale);

// Define the applyColors function
const applyColors = (data) => {
    const colorPalette = ['#ff6361', '#ffa600', '#bc5090', '#58508d', '#003f5c'];
    const labels = data.labels;
    const datasets = data.datasets.map((dataset, index) => ({
        ...dataset,
        backgroundColor: labels.map((label, index) => {
            const year = parseInt(label);
            return colorPalette[year % colorPalette.length];
        })
    }));

    return { labels, datasets };
};

export default function App() {
    const [chartData, setChartData] = useState(null);

    // Function to format the data into the structure expected by the chart library
    const formatDataForChart = (data) => {
        const labels = data.map(item => item.year.toString());
        const userGainData = data.map(item => item.userGain);
        const userLostData = data.map(item => item.userLost);

        return {
            labels: labels,
            datasets: [
                {
                    label: 'Users Gained',
                    data: userGainData,
                },
                {
                    label: 'Users Lost',
                    data: userLostData,
                },
            ],
        };
    };

    // When the component mounts, format the data and set it as the chartData state
    useEffect(() => {
        const formattedData = formatDataForChart(Data);
        const coloredData = applyColors(formattedData); // Use the applyColors function
        setChartData(coloredData);
    }, []);

    return (
        <div className="App" style={{ display: 'flex' }}>
            {chartData && <PieChart chartData={chartData} data={Data} />}
			{chartData && <BarChart chartData={chartData} data={Data} />}
			{chartData && <LineChart chartData={chartData} data={Data} />}
			
        </div>
    );
}
