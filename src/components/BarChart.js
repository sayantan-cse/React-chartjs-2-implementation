import React from 'react';
import {Bar,Pie} from 'react-chartjs-2';


//for chartlabels
import ChartDataLabels from 'chartjs-plugin-datalabels';

// without this import chart will not render
import Chart from 'chart.js/auto';



const BarChart = ()=>{
   
    return(

        <>
            {/* <Bar



            //first curly brace dynamic javascript content
            //2nd curly brace javascript object
            data={{
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
            label: 'sample label',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]

            }}
            height={400}
            width={600}
            
            options={{
                maintainAspectRatio:false
            }}
            plugins={[ChartDataLabels]}

             /> */}
            
             <Pie

            //first curly brace dynamic javascript content
            //2nd curly brace javascript object
            data={{
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
            label: 'sample label',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]

            }}
            height={400}
            width={600}
            options={{
                maintainAspectRatio:false
            }}
              plugins={[ChartDataLabels]}

             />
            
        </>
    );
}




export default BarChart;

