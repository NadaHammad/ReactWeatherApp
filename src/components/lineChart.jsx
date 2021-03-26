import React from "react";
import { Line } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import { useState, useEffect, useCallback } from "react";
import {Chart} from 'react-chartjs-2';

const LineChart= ({rain, humidity, temp}) => {
  Chart.defaults.global.defaultFontColor = 'white';

  let day = new Date();
  const [today] = useState(day);
  let [listItems,setListItems] = useState(<table></table>);

  let datesArray = new Array(7);
 
//   useEffect(() => {
  if (rain) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    //variable for day number and month
    //var datesArray = new Array(7);
    let tempDate = today;                                                                                                                                                                                                                             
    for (let i = 0; i<7;i++){
      datesArray[i] = (months[tempDate.getMonth()] +" " + tempDate.getDate());
      tempDate.setDate(tempDate.getDate()+1)
    }
    
  }
  const rainFormat = rain ? rain.map((data) => (data*100)) : []
    
  console.log(rain)
  console.log(humidity)
  console.log(datesArray)
//  },[rain, today, datesArray, humidity]);

  const state = {
    dataLine: {
      labels: datesArray,
      datasets: [
        {
          label: "Chance of Rain",
          fill: true,
          lineTension: 0.3,
          backgroundColor: "rgba(225, 204,230, .3)",
          borderColor: "rgb(205, 130, 158)",
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
          pointRadius: 1,
          pointHitRadius: 10,
          data: rainFormat
        },
        {
          label: "Humidity",
          fill: true,
          lineTension: 0.3,
          backgroundColor: "rgba(184, 185, 210, .3)",
          borderColor: "rgb(35, 26, 136)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgb(35, 26, 136)",
          pointBackgroundColor: "rgb(255, 255, 255)",
          pointBorderWidth: 10,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgb(0, 0, 0)",
          pointHoverBorderColor: "rgba(220, 220, 220, 1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: humidity
        }
      ]
    }
  };

  
    return (
      <MDBContainer className="lineC">
        <h3 id="hTemp" className="mt-5">Chance of Rain and Humidity data</h3>
        <Line data={state.dataLine} options={{ responsive: true }} />
      </MDBContainer>
    );
  
}
export default LineChart
