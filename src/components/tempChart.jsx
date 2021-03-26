import React,  { useState } from "react";
import { Line } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
// Imports for use in the file
import {hourlyT} from './iphone/index';
import {Chart} from 'react-chartjs-2';

const TempChart = () => {
  Chart.defaults.global.defaultFontColor = 'white';
  
  const {deet, timings}  = React.useContext(hourlyT);
  const [hourT, setH] = deet;
  const [hourtimings, setHourTimings] = timings; 
 


  const state = {
    dataLine: {
      labels: hourtimings ,
      datasets: [
        {
          label: "Temperature in Celsius",
          fill: true,
          lineTension: 0.3,
          backgroundColor: "rgba(226, 0, 0, .3)",
          borderColor: "rgb(226, 0, 0)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgb(205, 130,1 58)",
          pointBackgroundColor: "rgb(255, 255, 255)",
          pointBorderWidth: 10,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgb(0, 0, 0)",
          pointHoverBorderColor: "rgba(220, 220, 220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 3,
          pointHitRadius: 10,
          data: hourT
        }
      ]
    }, 
  
  };


    return (
      <MDBContainer className="lineC">
        <h3 id="hTemp" className="mt-5">12-hour Temperature View</h3>
        <Line data={state.dataLine} options={{ responsive: true, 

        scales: {
          yAxes: [{
            ticks:{
            fontSize: '11'
            }

          }],

          xAxes: [{
            ticks:{
              fontSize: '11'
            }
          }]
        
        }

          }} />
      </MDBContainer>
    );
}

export default TempChart;