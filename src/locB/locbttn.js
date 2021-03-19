import "./locbttn.css"; // import required Components from 'components/'
import React, { useState } from 'react';

export default function Locbttn(props) {
    // Declare a new state variable, which we'll call "count"
    const [area, setA]= useState("London");
    const [temperature, setT ] = useState("20");
  
    // function handleAreaChange(e){
    //     setA(e.target.value);
    // }
    // function handleTempChange(e){
    //     setT(e.target.value);
        
    return (
        <div  class="locbttn" >
            <section class="locbanner">
                <p class="area" >{area}</p>
                <p class="temp" >{temperature}</p>
            </section>
        </div>
    );
  }