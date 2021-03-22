import React, { useState, useEffect, useCallback } from "react";
import './dayview.css';


const DayView = ({ iconArray, rainArray, tempArray}) => {
  let day = new Date();
  const [today] = useState(day);
  var [listItems,setListItems] = useState(<table></table>);

  const dayString = (dayint) => {
    if (dayint % 7 === 0) {
      return "Sun";
    } else if (dayint % 7 === 1) {
      return "Mon";
    } else if (dayint % 7 === 2) {
      return "Tue";
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
  const hourlyTemp = ((index) => {
    
  },[]);
  useEffect(() => {
  if (rainArray ){

    const months = ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

    //variable for day names
    let days = new Array(7);
    for (let i =0; i<7;i++){
      days[i] = dayString(today.getDay()+i);
    }
    let dayRow = days.map((day,index) =>
      <th key= {index}>{day}</th>
    )
    dayRow = (<thead key= "thead"><tr key= "dayRow">{dayRow}</tr></thead>);

    //variable for day number and month
    let datesArray = new Array(14);
    let tempDate = today;                                                                                                                                                                                                                             
    for (let i = 0; i<7;i++){

      datesArray[i] = (months[tempDate.getMonth()] +" " + tempDate.getDate());
      
      tempDate.setDate(tempDate.getDate()+1)
    }
    let dateRow = datesArray.map((date,index) =>
      <th className="tableDates" key= {index}>{date}</th>
    );
    dateRow = (<tr key= "dateRow">{dateRow}</tr>);

    //iconrow
    //keys = [0,1,2,3,4,5,6];
    const iconPath = 'http://openweathermap.org/img/wn/';
    let iconRow = iconArray.map((icon,index) =>
    <th className="tableIcon" key ={index}><img style = {{ width: "100%" }} src = {(iconPath + icon + "@2x.png")}></img></th>
    );
    iconRow = (<tr key= "iconRow">{iconRow}</tr>);

    //tempRow
    let tempRow = tempArray.map((temp,index) =>
    <th key= {index}>{Math.round(temp)}°C</th>
    );
    tempRow = (<tr key= "tempRow">{tempRow}</tr>);


    
    setListItems(<table cellPadding="1" cellSpacing="0">{dayRow}<tbody>{dateRow}{iconRow}{tempRow}</tbody></table>)
  }

  },[iconArray, rainArray, tempArray, today]);
  
  //console.log(rainArray);
  return (<div>{listItems}</div>);
};

export default DayView;