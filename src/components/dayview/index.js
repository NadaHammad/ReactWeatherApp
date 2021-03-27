import React, { useState, useEffect, useCallback } from "react";
import './dayview.css';


const DayView = ({ iconArray, rainArray, tempArray,hourlyTemp}) => {
  let day = new Date();
  const [today] = useState(day); 
  var [listItems,setListItems] = useState(<table></table>);
  var [hourlyTable,setHourlyTable] = useState(<table></table>);
  var [hourDisplay,setHourDisplay] =useState(false);
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



  function formatTime(hour){
    return hour >= 24 ? hour-24 :hour;
  }

  function hourlyInfo(index){
    //TIME OF START OF THE DAY
    const start = 6;
    let timeDifference = today.getHours();
    timeDifference = 24 + start - timeDifference;
    let timeArray = [];
    let hourArray = [];
    let iconArray = [];

    let iconStart = "";


    //shows the current days hourly temp
    if (index == 0){ 
      for(let i = 0;i < timeDifference;i++){
        timeArray.push(formatTime(today.getHours()+i));
        hourArray.push(hourlyTemp[i]["temp"]);
        iconArray.push(hourlyTemp[i]["weather"][0]["icon"]);
        if(formatTime(today.getHours()+i) == 0){
          iconStart = i;
        }
      }


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
        timeArray.push(formatTime(today.getHours()+i));
        hourArray.push(hourlyTemp[i]["temp"]);
        iconArray.push(hourlyTemp[i]["weather"][0]["icon"]);

      }
      let dayRow = (<thead key= "thead"><tr><th className="tomtom2" key= "dayRow" colSpan ={timeArray.length-1} >Tomorrow</th></tr></thead>);
      let timeRow = timeArray.map((time,index) =>
      <th className="timess" key= {index}>{time}:00</th>
      );

      //row for showing tomorrow
      timeRow = (<tr key= "timeRow">{timeRow}</tr>);

      //row for showing time
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
    let dateRow = datesArray.map((date,index) =>
      <th className="tableDates" key= {index} onClick={() => hourlyInfo(index)}>{date}</th>
    );
    dateRow = (<tr key= "dateRow" >{dateRow}</tr>);

    //iconrow
    //keys = [0,1,2,3,4,5,6];
    const iconPath = 'http://openweathermap.org/img/wn/';
    let iconRow = iconArray.map((icon,index) =>
    <th  key ={index} onClick={() => hourlyInfo(index)} ><img style = {{ width: "100%" }} src = {(iconPath + icon + "@2x.png")}></img></th>
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
  return (hourDisplay ? <div>{hourlyTable}</div> : <div>{listItems}</div>);
};

export default DayView;