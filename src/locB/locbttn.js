import "./locbttn.css"; // import required Components from 'components/'
import React, { useContext, useState } from 'react';
import {LocationList} from "../components/iphone/index";

export default function Locbttn(props) {
    const [locationData, setLocationData]  =  React.useContext(LocationList);

    return (
        <div  className="locbttn" >
            <div className="locbanner">
                <p className="area" >{locationData.locate}</p>
                <p className="temp" >{locationData.temp}ºC</p>
            </div> 
        </div>
    );
  } 