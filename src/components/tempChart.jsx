import React,  { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

import {hourlyT} from './iphone/index';

const TempChart = () => {
  
  const {deet}  = React.useContext(hourlyT);
  const [hourT, setH] = deet;
 
  const hours = () => {
    
  }


  const state = {
    dataLine: {
      labels: [0,1,2,3,4,5,6,7,8,9,10,11],
      datasets: [
        {
          label: "Temperature",
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

  const options = {
    scales: {
        yAxes: [{
          
            ticks: {
                stepSize: 0.5,
            }
        }]
    }
}
    return (
      <MDBContainer className="lineC">
        <h3 id="hTemp" className="mt-5">Hourly Temperature in Celsius</h3>
        <Line data={state.dataLine} options={options} />
      </MDBContainer>
    );
}

export default TempChart;