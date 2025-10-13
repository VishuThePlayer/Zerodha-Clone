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
       <a
        name=""
        id=""
        class="btn btn-primary"
        href="#"
        role="button"
        >Button</a
       >
       
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