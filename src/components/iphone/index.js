// import jquery for API calls
import $ from "jquery";
// import the Button component
import DayView from "../dayview";
import Notification from "../notification";
import React, { useState, useEffect, useCallback } from "react";
// import ReactDOM from "react-dom";
import LineChart from "../lineChart";

// IMPORTS AND EXPORTS FOR LOCATION BANNERS 
import Locbttn from '../../locB/locbttn';
import ManageLoc from '../../locB/mnglocbttn';
import SimpleAccordion from '../accordion'

export const LocationList = React.createContext();




// The IPHONE HOOK
const Iphone = () => {

  const [mounted, setMounted] = useState(true);
  const [data, setData] = useState([]); // holds data of London weather 
  const [background, setBackground] = useState("container"); // holds the data for background image. This changes based on weather conditions




	{/* -------------------------------------------    LOCATION DATA FETCHING    ------------------------------------------------------------ */}
	{/* -------------------------------------------    LOCATION DATA FETCHING    ------------------------------------------------------------ */}
	{/* -------------------------------------------    LOCATION DATA FETCHING    ------------------------------------------------------------ */}
	// An array holding the current time until the time after 12 hours. Thsi is used in the lineChart
  const [hourtimings, setHourTimings] = useState();

  //Today's date
  let day = new Date();
 
  const [hourT, setH] = useState(); // This is the constant value, that is passed as context to TempChart. This displays the hourly temperature
  const [displayGraph, setDisplayGraph] = useState(false);

  // This holds the icon of the current weather condition of London 
  let iconPath = 'http://openweathermap.org/img/wn/';
  const [iconR, setR] = useState("0");

  // These constants hold the weather data of the 3 LOCATIONS that are displayed in the Loncation Banners
  const [locationData1, setLocationData1] = useState([]); 
  const [locationData2, setLocationData2] = useState([]); 
  const [locationData3, setLocationData3] = useState([]); 

  // CONSTS FOR USE in the Manage Location
  // We first pass the 3 INITIAL LOCATIONS [CAMDEN, BRENT, AND CROYDON]
  const parseLoc1 = (parsed_json) => {

    let location = "Camden";
    let temp_c = Math.round(parsed_json["current"]["temp"]* 10)/10;
    let conditions = parsed_json["current"]["weather"]["0"]["description"];
    let id = parsed_json["current"]["weather"][`0`][`id`].toString();
    let icon = parsed_json["daily"][0]["weather"]["0"]["icon"];
    
    setLocationData1({
      locate: location,
      temp: temp_c,
      cond: conditions,
      i: icon,
      idd : id
    });
  };

  const parseLoc2 = (parsed_json) => {

    let location = "Brent";
    let temp_c = Math.round(parsed_json["current"]["temp"]* 10)/10;
    let conditions = parsed_json["current"]["weather"]["0"]["description"];
    let id = parsed_json["current"]["weather"][`0`][`id`].toString();
    let icon = parsed_json["daily"][0]["weather"]["0"]["icon"];

    setLocationData2({
      locate: location,
      temp: temp_c,
      cond: conditions,
      i: icon,
      idd : id
    });
  };

  const parseLoc3 = (parsed_json) => {

    let location =  "Croydon";
    let temp_c = Math.round(parsed_json["current"]["temp"]* 10)/10;
    let conditions = parsed_json["current"]["weather"]["0"]["description"];
    let id = parsed_json["current"]["weather"][`0`][`id`].toString();
    let icon = parsed_json["daily"][0]["weather"]["0"]["icon"];

    setLocationData3({
      locate: location,
      temp: temp_c,
      cond: conditions,
      i: icon,
      idd : id
    });
  };

  

  // We first call the API to retrive weather conditions for CAMDEN
  const fetchWeatherLocation1 = useCallback(() => {
    let url =
      "https://api.openweathermap.org/data/2.5/onecall?lat=51.5455&lon=0.1628&units=metric&appid=79782262247ddb1d61a5a42406f46966";
    $.ajax({
      url,
      dataType: "jsonp",
      success: parseLoc1,
      error(req, err) {
        console.log("API call failed " + err);
      },
    });

  }, []);

  // retrives data for BRENT
  const fetchWeatherLocation2 = useCallback(() => {
    let url =
      "https://api.openweathermap.org/data/2.5/onecall?lat=51.5673&lon=0.2711&units=metric&appid=79782262247ddb1d61a5a42406f46966";
    $.ajax({
      url,
      dataType: "jsonp",
      success: parseLoc2,
      error(req, err) {
        console.log("API call failed " + err);
      },
    });

  }, []);
  // retrieves data for CROYDON
  const fetchWeatherLocation3 = useCallback(() => {
    let url =
      "https://api.openweathermap.org/data/2.5/onecall?lat=51.3762&lon=0.0982&units=metric&appid=79782262247ddb1d61a5a42406f46966";
    $.ajax({
      url,
      dataType: "jsonp",
      success: parseLoc3,
      error(req, err) {
        console.log("API call failed " + err);
      },
    });

  }, []);

  // This function is used to switch the displaying of the ACCORDION and the GRAPHS 
  const displayGraphsFX = () => {
    setDisplayGraph(!displayGraph);
  }


	{/* --------- END END END ------------------------    LOCATION DATA FETCHING    ---------------------- END END END  -------------------------------- */}
	{/* --------- END END END ------------------------    LOCATION DATA FETCHING    ---------------------- END END END  -------------------------------- */}
	{/* --------- END END END ------------------------    LOCATION DATA FETCHING    ---------------------- END END END  -------------------------------- */}
		 



  


  // a call to fetch weather data via underground
  const fetchWeatherData = useCallback(() => {

    const parseResponse = (parsed_json) => {

      setMounted(false);
  
      // This line fo code, retrives Current temperature in London,
      // condition description, chance of Rain for the day, and weather ID
      let location = "London";
      let temp_c = Math.round(parsed_json["current"]["temp"]);
      let conditions = parsed_json["current"]["weather"]["0"]["description"];
      conditions = conditions.charAt(0).toUpperCase() + conditions.slice(1);
      let id = parsed_json["current"]["weather"][`0`][`id`].toString();
      let currentRain = parsed_json["hourly"][0]["pop"];
      currentRain = (<b style ={{fontSize: "200%"}}>{currentRain*100 + "%"}</b>);
      currentRain = (<div>Current chance of rain: {currentRain}</div>);
      let ii = parsed_json["current"]["weather"]["0"]["icon"];
  
      //  An array that holds the icons that visuall ydisplay the weather conditions for the 7 day period
      let iconArray = new Array(7);
      for (let i = 0; i < 7; i++) {
        iconArray[i] = parsed_json["daily"][i]["weather"]["0"]["icon"];
      }
  
      // THIS LINE OF CODE, IS ADDED FOR LINECHART
      // Setting the hourly temperatures for 12 hours only
      // This lone of code, gets the hourly temperature readings for 12 HOURS ONLY
      let hourlyTemp = parsed_json["hourly"];
      let hArray = new Array(12);
      for (let i = 0; i < 12; i++) {
        hArray[i] = parsed_json["hourly"][i]["temp"];
      }
      setH(hArray);
  
      //  This code, gets the 12-hour hour stamps, starting from the current hour and ending to the end of the 12-hours
      let timeArray = new Array(12);
      let num = day.getHours();
      for(let i = 0; i < 12; i++){
        let A = num + i;
        if(A  < 24){ 
          timeArray[i] = A + ":00";
        } else {
          if(A == 0){
  
          }
          timeArray[i] = (A - 24) + ":00";
        }
      }
      setHourTimings(timeArray);
      // THIS IS THE END OF THE LINE FOR TEMPCHART CODE
  
  
      //finds daily chance of rain from parsed data from API
      let dailyRain = new Array(7);
      for (let i = 0; i < 7; i++) {
        dailyRain[i] = parsed_json["daily"][i]["pop"];
      }
  
      //finds daily humidity from parsed data from API
      let dailyHumidity = new Array(7);
      for (let i = 0; i < 7; i++) {
        dailyHumidity[i] = parsed_json["daily"][i]["humidity"];
      }
  
      //finds daily wind speed from parsed data from API
      let dailyWindSpeed = new Array(7);
      for (let i = 0; i < 7; i++) {
        dailyWindSpeed[i] = parsed_json["daily"][i]["wind_speed"];
      }
  
      //finds daily temperature from parsed data from API
      let dailyTemp = new Array(7);
      for (let i = 0; i < 7; i++) {
        dailyTemp[i] = parsed_json["daily"][i]["temp"]["day"];
      }
  
      //  sets the icons
      setR(ii);
  
      // set states for fields so they could be rendered later on
      setData({
        locate: location,
        temp: temp_c,
        cond: conditions,
        wid: id,
        dailyRain,
        dailyTemp,
        iconArray,
        dailyHumidity,
        dailyWindSpeed,
        currentRain,
        hourlyTemp
      });
    };



    // Fetches weather data for London
    let url =
      "https://api.openweathermap.org/data/2.5/onecall?lat=51.5074&lon=0.1278&units=metric&appid=79782262247ddb1d61a5a42406f46966";
    $.ajax({
      url,
      dataType: "jsonp",
      success: parseResponse,
      error(req, err) {
        console.log("API call failed " + err);
      },
    });

    // once the data grabbed, hide the button
    setMounted(false);

    
  }, [day]);

  // Fetches data once the component is mounted
  useEffect(() => {
    if (mounted) {
      fetchWeatherData();
      
      fetchWeatherLocation1();
      fetchWeatherLocation2();
      fetchWeatherLocation3();
    }
  }, [mounted, fetchWeatherData, fetchWeatherLocation1, fetchWeatherLocation2, fetchWeatherLocation3]);

  // Once data [weather condtions] have been set. Then set tje BACKGROUND depending on weather condition ID 
  useEffect(() => {
    if (data.temp) {

      //change background depending on what the current weather is like. This is so that the background 
      //represents the current weather.
      if (data && data.wid == "800") {
        setBackground("/clear.jpg");
      } else if (data && data.wid == "801") {
        setBackground("/fewClouds.jpg");
      } else if (data && data.wid.charAt(0) == 8) {
        setBackground("/cloudy.jpg");
      } else if (
        (data && data.wid.charAt(0) == 3) ||
        (data && data.wid.charAt(0) == 5)
      ) {
        setBackground("/rain.jpg");
      } else if (data && data.wid == "701") {
        setBackground("/mist.jpg");
      } else if (data && data.wid.charAt(0) == 6) {
        setBackground("/snow.jpg");
      }
    }
    
  }, [data]);


  // formats date to display info
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  //variable for day number and month
  let datesArray = new Array(7);
  let tempDate = day;                                                                                                                                                                                                                             
  for (let i = 0; i<7;i++){
    datesArray[i] = (months[tempDate.getMonth()] +" " + tempDate.getDate());
    tempDate.setDate(tempDate.getDate()+1)
  }

  //data in daily rain is a decimal. Here we change it to a percentage (if it is defined)
  const formatData= data.dailyRain ? data.dailyRain.map((data)=>(data*=100)) : [];

  //creating the graphs we will be displaying in the app. Graphs are lists of objects. Each object represents a line
  //in the line chart
  const graph1=[{
    type: 'Chance of Rain',
    x: datesArray,
    y: formatData
  },
  {
    type: 'Humidity',
    x: datesArray,
    y: data.dailyHumidity
  }
  ]
  const graph2=[{
  type: 'Hourly Temperature',
    x: hourtimings,
    y: hourT
  }]


  //displaying everything
  return (
    document.body.style.backgroundImage = `url(img/${background})`,
    document.body.style.backgroundSize = '414px 100%',
    document.body.style.display = "block",
    document.body.style.textAlign = "center",
    document.body.style.flexDirection ="column",
    document.body.style.backgroundAttachment ="fixed",
    document.body.style.backgroundPosition ="center top",
    document.body.style.backgroundRepeat ="no-repeat",
    

    <div
    // This is the styling for the whole page
      style={{
        display: "flex",
        flexDirection: "column",
        color: "#fff",
        width: "414px",
        height: "736px",
        textAlign: "center",
        paddingTop: "80px",
        margin: "0 auto"
      }}
    >

	{/* -------------------------------------------    LOCATION BUTTONS OR BANNERS    ------------------------------------------------------------ */}
	{/* -------------------------------------------    LOCATION BUTTONS OR BANNERS    ------------------------------------------------------------ */}
	{/* -------------------------------------------    LOCATION BUTTONS OR BANNERS    ------------------------------------------------------------ */}
        {/* The locations buttons are WRAPPED by a context called LocationList that passes the weather conditions of the 3 LOCATIONS
           by wrapping them in a context, we can immediately and flexibly render any changes on the LOCATION BANNERS */}
           
          {/* LOCATION BUTTON 1 */}
          <LocationList.Provider value={[locationData1, setLocationData1]}>
            <div>
              <div className="Banner" >
                <Notification location = {locationData1.locate}/>
                {data.display ? null : <Locbttn/> } 
              </div>
            </div>
          </LocationList.Provider>
          
          {/* LOCATION BUTTON 2 */}
          <LocationList.Provider value={[locationData2, setLocationData2]}>
            <div>
              <div className="Banner" >
                {/* <Notification location = {locationData2.locate}/> */}
                {data.display ? null : <Locbttn/> } 
              </div>
            </div>
          </LocationList.Provider>

          {/* LOCATION BUTTON 3 */}
          <LocationList.Provider value={[locationData3, setLocationData3]}>
            <div>
              <div className="Banner" >
                <Notification location = {locationData3.locate}/>
                {data.display ? null : <Locbttn/> } 
              </div>
            </div>
          </LocationList.Provider>

          <LocationList.Provider value={{loc1: [locationData1, setLocationData1], loc2: [locationData2, setLocationData2], loc3: [locationData3, setLocationData3]  }}>
            <div className="Banner">
              {data.display ? null : <ManageLoc/> }
            </div>
          </LocationList.Provider>
        
          {/* THE BUTTON THAT HANDLES the switching of displays of ACCORDION and the GRAPHS */}
          <div className="Banner">
            <div className="mngbttn">
              <button onClick={displayGraphsFX}> {displayGraph? "Normal View" : "Graph View"} </button>
            </div>
          </div>

	{/* ---------- END END -----------------------    LOCATION BUTTONS OR BANNERS    ----------------------------------- END END----------------- */}
	{/* ---------- END END -----------------------    LOCATION BUTTONS OR BANNERS    ----------------------------------- END END----------------- */}
	{/* ---------- END END -----------------------    LOCATION BUTTONS OR BANNERS    ----------------------------------- END END----------------- */}
       


       {/* DISPLAY THE TEMPERATURE OF LONDON AND THE NAME */}
        <div className="citytemp">
          <div className="city">
            {data ? data.locate : ""}
          </div>
          <div className="bigTemp">
            {data ? data.temp : ""}ºC
          </div>
        </div>

      {/* displays the header that contains ICON and CONDITIONS of weather in LONDON */}
      <div className="header">
        <div className="icon" >{data ? <img style = {{ width: "30%", marginBottom: "-30px"}} alt = "current weather icon" src = {(iconPath + iconR + "@2x.png")}></img> : ""}</div> 
        <div className="conditions" style={{fontWeight:"bold"}}>{data ? data.cond : ""}</div>
      </div>

      <br></br>
      <br></br>

      {/* DISPLAYS THE CURRENT CHANCE OF RAINN INN LONDON */}
      <div className="currentRain">{data ? data.currentRain: ""}</div>

      {/* RENDERS the 7-day VIEW OF TEMPERATURE IN LONDON */}
      <div className={"containeriPhone button"}>
          {!mounted? (
           <DayView iconArray= {data.iconArray} rainArray={data.dailyRain} tempArray ={data.dailyTemp} hourlyTemp ={data.hourlyTemp}></DayView>
          ) : null}
      </div>

      <br></br>

    {/* Displays the Accordions or the Graphs, whenever the "Graph Display" button is clicked on */}
      { displayGraph?
        <div>
            {/* line charts rendered here */}
            <LineChart data={graph1} title="Chance of Rain and Humidity (%)"/> 
            <LineChart data={graph2} title="Hourly Temperature (°C)"/> 
            <br></br>
        </div>
      : 
      
        <div style={{textAlign: "center"}}>
          {/* Accordions rendered here with data passed into them */}
          <SimpleAccordion title='Chance of Rain' dataArray={data.dailyRain}/>
          <SimpleAccordion title='Wind' dataArray={data.dailyWindSpeed}/>
          <SimpleAccordion title='Humidity' dataArray={data.dailyHumidity}/>
        </div>
      }

    </div>
  );
};
export default Iphone;