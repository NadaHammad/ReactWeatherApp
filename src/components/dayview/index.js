// import preact
//import { h, render, Component } from 'preact';
//import React from "react";
//import { h, render, Component } from 'react';
// import Table from 'react-bootstrap/Table'; 
import React, { useState, useEffect, useCallback } from "react";
import './dayview.css';


const DayView = ({ iconArray, rainArray, tempArray}) => {
  let day = new Date();
  const [today,setToday] = useState(day);
  var [listItems,setListItems] = useState(<table></table>);

  const dayString = (dayint) => {
    if (dayint % 7 === 0) {
      return "Sun";
    } else if (dayint % 7 === 1) {
      return "Mon";
    } else if (dayint % 7 === 2) {
      return "Tues";
    } else if (dayint % 7 === 3) {
      return "Wed";
    } else if (dayint % 7 === 4) {
      return "Thu";
    } else if (dayint % 7 === 5) {
      return "Fri";
    } else if (dayint % 7 === 6) {
      return "Sat";
    }
    
  };

  useEffect(() => {
  if (rainArray ){

    var months = ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

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
      <th className="tableDates" key= {date}>{date}</th>
    );
    dateRow = (<tr key= "dates">{dateRow}</tr>);

    //iconrow
    //keys = [0,1,2,3,4,5,6];
    const iconPath = 'http://openweathermap.org/img/wn/';
    let iconRow = iconArray.map((icon,index) =>
    <th className="tableIcon" key ={index}><img style = {{ width: "100%" }} src = {(iconPath + icon + "@2x.png")}></img></th>
    );
    iconRow = (<tr key= "icons">{iconRow}</tr>);

    //tempRow
    let tempRow = tempArray.map((temp,index) =>
    <th key= {index}>{Math.round(temp)}°</th>
    );
    tempRow = (<tr key= "temp">{tempRow}</tr>);




    
    setListItems(<table cellPadding="1" cellSpacing="0">{dayRow}<tbody>{dateRow}{iconRow}{tempRow}</tbody></table>)
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

  },[rainArray,tempArray]);
  
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