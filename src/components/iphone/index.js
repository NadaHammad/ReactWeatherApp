
//import background1 from "../../assets/backgrounds/clear.jpg";

// import jquery for API calls
import $ from "jquery";
// import the Button component
import Button from "../button";
import DayView from "../dayview";
import Notification from "../notification";
//import Notifications, {notify} from 'react-notify-toast';
import React, { useState, useEffect, useCallback } from "react";
import ReactDOM from "react-dom";

// Maki IMPORTS FOR LOCATION
import Locbttn from '../../locB/locbttn';
import ManageLoc from '../../locB/mnglocbttn';


//bootstrap?
// import Table from 'react-bootstrap/'; 





const Iphone = () => {
  const [mounted, setMounted] = useState(true);
  const [data, setData] = useState([]);
  const [background, setBackground] = useState("container");
  const [tempStyles, setTempStyles] = useState("");
  //let [weatherInfo, setWeatherInfo] = useState([]);

  const parseResponse = (parsed_json) => {

    //name not available in one call we could hard code it?
    setMounted(false);

    //var location = parsed_json['name'];
    let location = "London";
    let temp_c = Math.round(parsed_json["current"]["temp"]);
    let conditions = parsed_json["current"]["weather"]["0"]["description"];
    let id = parsed_json["current"]["weather"][`0`][`id`].toString();

    let iconArray = new Array(7);
    for (let i = 0; i < 7; i++) {
      iconArray[i] = parsed_json["daily"][i]["weather"]["0"]["icon"];
    }

    let dailyRain = new Array(7);
    for (let i = 0; i < 7; i++) {
      dailyRain[i] = parsed_json["daily"][i]["pop"];
    }

    //daily temperature
    let dailyTemp = new Array(7);
    for (let i = 0; i < 7; i++) {
      dailyTemp[i] = parsed_json["daily"][i]["temp"]["day"];
    }

    // set states for fields so they could be rendered later on
    setData({
      locate: location,
      temp: temp_c,
      cond: conditions,
      wid: id,
      dailyRain,
      dailyTemp,
      iconArray,
    });
  };


  // a call to fetch weather data via wunderground
  const fetchWeatherData = useCallback(() => {
    // API URL with a structure of : ttp://api.wunderground.com/api/key/feature/q/country-code/city.json
    //var url = "http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&APPID=6b825d5e524d540a69987f621c8f50dc";
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
  }, []);

  useEffect(() => {
    if (mounted) {
      fetchWeatherData();
    }
  }, [mounted, fetchWeatherData]);


  useEffect(() => {
    if (data.temp) {
      setTempStyles(`${"temperature"} ${"filled"}`);

      //NOT ALL CODES ARE IMPLEMENTED
      //TODO?

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
    } else {
      setTempStyles("temperature");
    }



    //const today = new Date();

    //checks if data has been retrivied as will throw undefined error beofre
    //console.log(this.state.days);
    //let weatherInfo = [];
    
  }, [data]);

  // formats date to display info

  return (
    <div
      // className="containeriPhone"
      style={{
        display: "flex",
        flexDirection: "column",
        color: "#fff",
        width: "500px",
        height: "736px",
        textAlign: "center",
        paddingTop: "80px",
        margin: "0 auto",
        backgroundImage: `url(img/${background})`,
      }}
    >

	{/* -------------------------------------------    LOCATION BUTTONS OR BANNERS    ------------------------------------------------------------ */}
				{/* Maki added this as a template for now for the loaction banner. must be fixed with styling */}
        {/* <div style={{margin:"0px", padding: "0px", display: "inline"}}><Notification/></div> */}
        <div >
          <div className="Banner" >
            <Notification location = {data.locate}/>
            {data.display ? null : <Locbttn/> } 
          </div>
        </div>

				{/* LOCATION BUTTON 2 */}
        <div >
          <div className="Banner" >
           
            {data.display ? null : <Locbttn/> } 
          </div>
        </div>


				{/* LOCATION BUTTON 3 */}
        <div >
          <div className="Banner" >
            <Notification location = {data.locate}/>
            {data.display ? null : <Locbttn/> } 
          </div>
        </div>
				

				<div className="Banner">
					{data.display ? null : <ManageLoc/> }
				</div>
	{/* ---------- END END -----------------------    LOCATION BUTTONS OR BANNERS    ----------------------------------- END END----------------- */}

      <div className="header">
        <div className="city">{data ? data.locate : ""}</div>
        <div className="conditions">{data ? data.cond : ""}</div>
        <span className="bigTemp">{data ? data.temp : ""}</span>
        {/* {tempStyles} <-------------- ASK MAKI ABOUT THIS if you dont understand
                          the explanation. line above this comment- the SPAN had this className
                          but I changed it so I can be able to edit this. the style for this will #
                          be inindex.CSS, NOT less */}
      </div>

      <div className={"details"}></div>
      <div className={"containeriPhone button"}>
        {data && data.display? (
          <Button className={"button"} clickFunction={fetchWeatherData} />
          ) : null}
          {!mounted? (
           <DayView iconArray= {data.iconArray} rainArray={data.dailyRain} tempArray ={data.dailyTemp}></DayView>
          ) : null}
        
      </div>
    </div>
  );
};
export default Iphone;

// 		let container = style.container;

// 		//const tempStyles = this.state.temp ? `${style.temperature} ${style.filled}` : style.temperature;
// 		let tempStyles = "";
// 		if (this.state.temp) {
// 			tempStyles = `${style.temperature} ${style.filled}`;
// 			//this.state.wid = "601";

// 			//NOT ALL CODES ARE IMPLEMENTED
// 			//TODO?

// 			if (this.state.wid == "800") {
// 				container = style.clear;
// 			} else if (this.state.wid == "801") {
// 				container = style.fewClouds;
// 			} else if (this.state.wid.charAt(0) == 8) {
// 				container = style.cloudy;
// 			} else if (
// 				this.state.wid.charAt(0) == 3 ||
// 				this.state.wid.charAt(0) == 5
// 			) {
// 				container = style.rain;
// 			} else if (this.state.wid == "701") {
// 				container = style.mist;
// 			} else if (this.state.wid.charAt(0) == 6) {
// 				container = style.snow;
// 			}
// 		} else {
// 			tempStyles = style.temperature;
// 		}

// 		//formats date to display info
// 		const today = new Date();

// 		let weatherInfo = [];
// 		//checks if data has been retrivied as will throw undefined error beofre
// 		//console.log(this.state.days);
// 		if (this.state.dailyRain) {
// 			weatherInfo.push(
// 				<div> Today's chance of rain is {this.state.dailyRain[0] * 100}%</div>
// 			);
// 			for (let i = 1; i < 6; i++) {
// 				weatherInfo.push(
// 					<DayView
// 						day={this.dayString(today.getDay() + i)}
// 						chance={this.state.dailyRain[i]}
// 					></DayView>
// 				);
// 			}
// 			weatherInfo = <div>{weatherInfo}</div>;
// 		}
// 		// display all weather data

// 		return (
// 			<div class={container}>
// 				{/* <Notifications /> */}
// 				<div class={style.header}>
// 					<div class={style.city}>{this.state.locate}</div>
// 					<div class={style.conditions}>{this.state.cond}</div>
// 					<span class={tempStyles}>{this.state.temp}</span>
// 				</div>

// 				<div class={style.details}></div>
// 				<div class={style_iphone.container}>
// 					{this.state.display ? (
// 						<Button
// 							class={style_iphone.button}
// 							clickFunction={this.fetchWeatherData}
// 						/>
// 					) : null}
// 					{weatherInfo}
// 				</div>
// 			</div>
// 		);
// 	}

// 	parseResponse = (parsed_json) => {
// 		//name not available in one call we could hard code it?
// 		//var location = parsed_json['name'];
// 		let location = "London";
// 		let temp_c = Math.round(parsed_json["current"]["temp"]);
// 		let conditions = parsed_json["current"]["weather"]["0"]["description"];
// 		let id = parsed_json["current"]["weather"][`0`][`id`].toString();
// 		//var rainpop =  parsed_json["daily"][0][`pop`];
// 		let dailyRain = new Array(7);
// 		//rain for the next days
// 		for (let i = 0; i < 7; i++) {
// 			dailyRain[i] = parsed_json["daily"][i]["pop"];
// 			//console.log(dailyRain);
// 		}
// 		//var days = parsed_json["daily"]
// 		// set states for fields so they could be rendered later on
// 		this.setState({
// 			locate: location,
// 			temp: temp_c,
// 			cond: conditions,
// 			wid: id,
// 			dailyRain,
// 		});
// 	};
// 	dayString = (dayint) => {
// 		if (dayint % 7 === 0) {
// 			return "Sunday";
// 		} else if (dayint % 7 === 1) {
// 			return "Monday";
// 		} else if (dayint % 7 === 2) {
// 			return "Tueday";
// 		} else if (dayint % 7 === 3) {
// 			return "Wednesday";
// 		} else if (dayint % 7 === 4) {
// 			return "Thursday";
// 		} else if (dayint % 7 === 5) {
// 			return "Friday";
// 		} else if (dayint % 7 === 6) {
// 			return "Saturday";
// 		}
// 	};
// }
