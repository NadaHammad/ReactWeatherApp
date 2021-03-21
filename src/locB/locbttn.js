import "./locbttn.css"; // import required Components from 'components/'
import React, { useContext, useState } from 'react';
import {LocationList} from "../components/iphone/index";

export default function Locbttn(props) {
    // Declare a new state variable, which we'll call "count"
    const [area, setA]= useState("London");
    const [temperature, setT ] = useState("20");


    const [locationData, setLocationData]  =  React.useContext(LocationList);

    console.log("BANNER SAYING HI");
    console.log(locationData.locate);

    
    return (
        <div  className="locbttn" >
            <div className="locbanner">
                <p className="area" >{locationData.locate}</p>
                <p className="temp" >{locationData.temp}ºC</p>
            </div>
        </div>
    );
  }