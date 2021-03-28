import React, { useState, useEffect, useCallback } from "react";
//style import
import './dayview.css';


const DayView = ({ iconArray, rainArray, tempArray,hourlyTemp}) => {
  //gets the current date
  let day = new Date();
  const [today] = useState(day); 

  //used to store and display the items for the current week
  var [listItems,setListItems] = useState(<table></table>);
  //used to store and display the items for the selected day
  var [hourlyTable,setHourlyTable] = useState(<table></table>);
  //State of the current view mode(weekly or hourly)
  var [hourDisplay,setHourDisplay] =useState(false);

  //function to get the day string depending on the current day integer
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


  //eliminates excess time from certain operations(makes it 24 hours)
  function formatTime(hour){
    return hour >= 24 ? hour-24 :hour;
  }

  function hourlyInfo(index){
    //TIME OF START OF THE DAY
    const start = 6;
    //time difference from the current tinme until the start of the next day
    let timeDifference = today.getHours();
    timeDifference = 24 + start - timeDifference;

    //arrays for storing time,hourly weather, icon IDs and icon-styiling variable for the day separtion styling (vertical line on the current day)
    let timeArray = [];
    let hourArray = [];
    let iconArray = [];
    let iconStart = "";


    //shows the current days hourly temp(index is the table colum tapped on the main index)
    if (index == 0){ 
      for(let i = 0;i < timeDifference;i++){
        //gets all the data according to the selected day and puts in arrays
        timeArray.push(formatTime(today.getHours()+i));
        hourArray.push(hourlyTemp[i]["temp"]);
        iconArray.push(hourlyTemp[i]["weather"][0]["icon"]);
        //if its the start of a new day set the iconstart as the pointer to know when the day starts
        if(formatTime(today.getHours()+i) == 0){
          iconStart = i;
        }
      }

      //row for showing the table header
      let dayRow = (<thead key= "thead"><tr><th className="twoday" colSpan ={timeDifference - start}>Today</th><th className="tomtom3" colSpan ={start}>Tomorrow</th></tr></thead>);

      //row for showing time
      let timeRow = timeArray.map((time,index) =>
      <th  className="timess" id={(time == 0) ?"startTime": "none"} key= {index}>{time}:00</th>
      );
      timeRow = (<tr key= "timeRow">{timeRow}</tr>);
      ;

      //row for showing time
      const iconPath = 'http://openweathermap.org/img/wn/';
      let iconRow = iconArray.map((icon,index) =>
      <th className="tableIcon" id={(iconStart == index) ? "startTime": "none"}  key ={index} onClick={() => hourlyInfo(index)} ><img style = {{ width: "100%" }} src = {(iconPath + icon + "@2x.png")}></img></th>
      );
      iconRow = (<tr key= "iconRow">{iconRow}</tr>);

      //row for showing temperature
      let tempRow = hourArray.map((temp,index) =>
      <th id={(iconStart == index) ? "lastRoww": "none"} className="lastRoww" key= {index}>{Math.round(temp)}°C</th>
      );
      tempRow = (<tr key= "tempRow">{tempRow}</tr>);
      
      //showing hourly display
      setHourlyTable(<table className="scrollbar" onClick = {() => setHourDisplay(false)} cellPadding="1" cellSpacing="0">{dayRow}<tbody>{timeRow}{iconRow}{tempRow}</tbody></table>);
      setHourDisplay(true);
    }



    //shows tomorrows hourly temp
    else{
      for(let i = timeDifference;i<=timeDifference+24-start;i++){
         //gets all the data according to the selected day and puts in arrays
        timeArray.push(formatTime(today.getHours()+i));
        hourArray.push(hourlyTemp[i]["temp"]);
        iconArray.push(hourlyTemp[i]["weather"][0]["icon"]);

      }
      //row for showing the header for tomorrow
      let dayRow = (<thead key= "thead"><tr><th className="tomtom2" key= "dayRow" colSpan ={timeArray.length-1} >Tomorrow</th></tr></thead>);
      let timeRow = timeArray.map((time,index) =>
      <th className="timess" key= {index}>{time}:00</th>
      );

      //row for showing times
      timeRow = (<tr key= "timeRow">{timeRow}</tr>);

      //row for showing icons
      const iconPath = 'http://openweathermap.org/img/wn/';
      let iconRow = iconArray.map((icon,index) =>
      <th className="tableIcon"  key ={index} onClick={() => hourlyInfo(index)} ><img style = {{ width: "100%" }} src = {(iconPath + icon + "@2x.png")}></img></th>
      );
      iconRow = (<tr key= "iconRow">{iconRow}</tr>);

      //row for showing temperature
      let tempRow = hourArray.map((temp,index) =>
      <th key= {index}>{Math.round(temp)}°C</th>
      );
      tempRow = (<tr key= "tempRow">{tempRow}</tr>);
      
      //showing hourly display
      setHourlyTable(<table className="scrollbar" onClick = {() => setHourDisplay(false)} cellPadding="1" cellSpacing="0">{dayRow}<tbody>{timeRow}{iconRow}{tempRow}</tbody></table>);
      setHourDisplay(true);

    }
  }

  useEffect(() => {
  if (rainArray ){

    const months = ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

    //variable for day names
    let days = new Array(7);
    for (let i =0; i<7;i++){
      days[i] = dayString(today.getDay()+i);
    }

    //for for showing day names
    let dayRow = days.map((day,index) =>
      <th key= {index}>{day}</th>
    );
    dayRow = (<thead key= "thead"><tr key= "dayRow">{dayRow}</tr></thead>);

    //variable for day number and month
    let datesArray = new Array(14);
    let tempDate = today;                                                                                                                                                                                                                             
    for (let i = 0; i<7;i++){

      datesArray[i] = (months[tempDate.getMonth()] +" " + tempDate.getDate());
      
      tempDate.setDate(tempDate.getDate()+1)
    }
    //row for the dates displayed
    let dateRow = datesArray.map((date,index) =>
      <th className="tableDates" key= {index} onClick={() => hourlyInfo(index)}>{date}</th>
    );
    dateRow = (<tr key= "dateRow" >{dateRow}</tr>);

    //icon row for the weekview
    const iconPath = 'http://openweathermap.org/img/wn/';
    let iconRow = iconArray.map((icon,index) =>
    <th  key ={index} onClick={() => hourlyInfo(index)} ><img style = {{ width: "100%" }} src = {(iconPath + icon + "@2x.png")}></img></th>
    );
    iconRow = (<tr key= "iconRow">{iconRow}</tr>);

    //temperature row for the weekview
    let tempRow = tempArray.map((temp,index) =>
    <th key= {index}>{Math.round(temp)}°C</th>
    );
    tempRow = (<tr key= "tempRow">{tempRow}</tr>);


    
    setListItems(<table cellPadding="1" cellSpacing="0">{dayRow}<tbody>{dateRow}{iconRow}{tempRow}</tbody></table>)
  }

  },[iconArray, rainArray, tempArray, today]);
  
  //render of the dayview element depending on the hourDisplay variable (to show hourly or weekly)
  return (hourDisplay ? <div>{hourlyTable}</div> : <div>{listItems}</div>);
};

export default DayView;