import React from "react";
import { Line , Chart} from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

//A generic line graph. Uses any data provided to it through props
const LineGraph=({data, title})=> {

    //default font colour - a styling choice
Chart.defaults.global.defaultFontColor = 'white';

//structured so that data prop is a list of objects where each object is a line in the line graph. This is so that
//we can generalise the graph. Doesn't matter if the x axis or y axis is different because this will be specified
//in the object itself elsewhere. The lineChart itself will use any type of data provided to it.
const formatData= data.map((element)=>(
    {
        //each line in the line graph will be given the following attributes:
        //element.type is the name of the data series for the current line
        //element.y is the y axis data series
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
        labels: data[0].x, //data[0].x will give the x axis for the first object in the list of objects in data
        datasets: formatData
        }
    }
    return (
      <>
      <MDBContainer id="lineC"> 
          {/* the title prop is used to give each chart a different title */}
        <h3 className="mt-5">{title}</h3>        
        {data? <Line data={state.dataLine} options={{ responsive: true }} /> :""}      
        </MDBContainer>
      </>    
    );
}
export default LineGraph