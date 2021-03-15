import "./locbttn.css"; // import required Components from 'components/'
import React from "react";



export default class Locbttn extends React.Component{

    // Two states to handle for now: Location of choice and temperature of said location of choice
    state = {
        area: 'testing', 
        temperature: '100'
    }

    render() {
        // console.log('Hello world!');

    return (
        // Renders a banner via 'DIV' and using 'p'
        <div>
            <div  class="locbttn" >
                <section class="locbanner">
                    <p class="area" >{this.state.area}</p>
                    <p class="temp">{this.state.temperature}</p>
                </section>
            </div>
        </div>
        );
    }
    
}