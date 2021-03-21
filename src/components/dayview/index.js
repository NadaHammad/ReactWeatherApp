// import preact
//import { h, render, Component } from 'preact';
//import React from "react";
//import { h, render, Component } from 'react';
// import Table from 'react-bootstrap/Table'; 
import React, { useState, useEffect } from "react";


const DayView = ({ iconArray, rainArray, tempArray}) => {
  let day = new Date();
  const [today] = useState(day);
  var [listItems,setListItems] = useState(<table></table>);

  const dayString = (dayint) => {
    if (dayint % 7 === 0) {
      return "Sunday";
    } else if (dayint % 7 === 1) {
      return "Monday";
    } else if (dayint % 7 === 2) {
      return "Tuesday";
    } else if (dayint % 7 === 3) {
      return "Wednesday";
    } else if (dayint % 7 === 4) {
      return "Thursday";
    } else if (dayint % 7 === 5) {
      return "Friday";
    } else if (dayint % 7 === 6) {
      return "Saturday";
    }
    
  };

  useEffect(() => {
  if (rainArray ){

    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    //variable for day names
    let days = new Array(7);
    for (let i =0; i<7;i++){
      days[i] = dayString(today.getDay()+i);
    }
    let dayRow = days.map((day) =>
      <th key= {day}>{day}</th>
    )
    dayRow = (<thead key= "thead"><tr key= "days">{dayRow}</tr></thead>);

    //variable for day number and month
    let datesArray = new Array(14);
    let tempDate = today;                                                                                                                                                                                                                             
    for (let i = 0; i<7;i++){

      datesArray[i] = (months[tempDate.getMonth()] +" " + tempDate.getDate());
      
      tempDate.setDate(tempDate.getDate()+1)
    }
    let dateRow = datesArray.map((date) =>
      <th key= {date}>{date}</th>
    );
    dateRow = (<tr key= "dates">{dateRow}</tr>);

    //iconrow
    //keys = [0,1,2,3,4,5,6];
    const iconPath = 'http://openweathermap.org/img/wn/';
    let iconRow = iconArray.map((icon,index) =>
    <th key ={index}><img style = {{ width: "60px" }} alt = "weather icon" src = {(iconPath + icon + "@2x.png")}></img></th>
    );
    iconRow = (<tr key= "icons">{iconRow}</tr>);

    //tempRow
    let tempRow = tempArray.map((temp,index) =>
    <th key= {index}>{Math.round(temp)}°</th>
    );
    tempRow = (<tr key= "temp">{tempRow}</tr>);




    
    setListItems(<table>{dayRow}<tbody>{dateRow}{iconRow}{tempRow}</tbody></table>)
    //console.log(rainArray);

    //setListItems(rainArray[1]);
    //let keys = [0 ,1, 2, 3, 4, 5,6];
    /**/
    
    /*let info = keys.map((key) =>
    <div key={key}>
      {rainArray[key]}
      temperature
      {tempArray[key]}
    </div>
    );
    console.log(info);
   //let info = "1";
    setListItems(info);
    console.log("here");
    //setWeatherInfo(<div>{listItems}</div>);
    */
  }

  },[iconArray, rainArray, tempArray, today]);
  
  //console.log(rainArray);
  return (<div>{listItems}</div>);
};
export default DayView;

    /*let weatherInfo = [
    <Table striped bordered hover size="sm">
    <thead>
      <tr key = "1" >
        <th>#</th>
        <th>{rainArray ? rainArray[1]: "hello"}</th>
        <th>Last Name</th>
        <th>Username</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <td>3</td>
        <td colSpan="2">Larry the Bird</td>
        <td>@twitter</td>
      </tr>
    </tbody>
  </Table>
  ];*/