import React from 'react'
import { BarChart } from '@mui/x-charts/BarChart';

function GraphActionWindow({
open = true, 
uid    // pass open from parent if available
}) {
    return ( 
    <>
       {open? 
       <BarChart
       href=''
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