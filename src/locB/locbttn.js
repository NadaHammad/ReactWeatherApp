import "./locbttn.css"; // import required Components from 'components/'
import React, { useContext, useState } from 'react';
import {LocationList} from "../components/iphone/index"; // IMPORT THE CONTEXT

// THE LOCATION BANNER
export default function Locbttn(props) {
    const [locationData, setLocationData]  =  React.useContext(LocationList); // PASS THE CONTEXT, which are the 3 locations

    //  The data such as name and temperature fo the locations are then rendered here, by calling the constant that has the context
    return (
        <div  className="locbttn" >
            <div className="locbanner">
                <p className="area" >{locationData.locate}</p>
                <p className="temp" >{locationData.temp}ºC</p>
            </div> 
        </div>
    );
  } 