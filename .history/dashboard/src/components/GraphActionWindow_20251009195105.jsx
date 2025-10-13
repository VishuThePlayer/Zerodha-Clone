import React from 'react'
import { BarChart } from '@mui/x-charts/BarChart';

function GraphActionWindow({
open = true, 
    // pass open from parent if available
}) {
    return ( 
    <>
       {open? <BarChart
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
        />: "Closed"}

    </> 
    );
}

export default GraphActionWindow;