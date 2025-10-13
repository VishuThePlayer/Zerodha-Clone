import React from 'react'
import { BarChart } from '@mui/x-charts/BarChart';
import { LineChart } from '@mui/x-charts/LineChart';

function GraphActionWindow({
open = true, 
uid    // pass open from parent if available
}) {
    return ( 
    <>
    {open? 
    <LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 10, 11, 12] }]}
      series={[
        {
          data: [2, 5.5, 2, 8.5, 1.5, 5, 7, 9, ],
        },
      ]}
      height={500}
    />
: "Closed"}

    </> 
    );
}

export default GraphActionWindow;