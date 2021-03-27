import React from "react";
import { Line , Chart} from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

const LineGraph=({data, title})=> {
Chart.defaults.global.defaultFontColor = 'white';


const formatData= data.map((element)=>(
    {
        label: element.type,
        fill: true,
        lineTension: 0.3,
        backgroundColor: element.type==="Humidity" ? "rgba(225, 204,230, .3)" : "rgba(184, 185, 210, .3)",
        borderColor: element.type==="Humidity" ? "rgb(205, 130, 158)": "rgb(35, 26, 136)",
        borderCapStyle: "butt",
        orderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: element.type==="Humidity" ? "rgb(205, 130,1 58)" : "rgb(35, 26, 136)",
        pointBackgroundColor: "rgb(255, 255, 255)",
        pointBorderWidth: 10,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgb(0, 0, 0)",
        pointHoverBorderColor: "rgba(220, 220, 220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: element.y        
    }
))

    const state={
        dataLine: {
        labels: data[0].x,
        datasets: formatData
        }
    }
    return (
      <>
      <MDBContainer> 
        <h3 className="mt-5">{title}</h3>        
        {data? <Line data={state.dataLine} options={{ responsive: true }} /> :""}      
        </MDBContainer>
      </>    
    );
}
export default LineGraph