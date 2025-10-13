import React from 'react'
import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

function GraphActionWindow() {
    return ( 
    <>
       <BarChart
            xAxis={[
                {
                id: 'barCategories',
                data: ['bar A', 'bar B', 'bar C'],
                },
            ]}
            series={[
                {
                data: [2, 5, 3],
                },
            ]}
            height={300}
            />

    </> 
    );
}

export default GraphActionWindow;