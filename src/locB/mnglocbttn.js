import React from "react";
import '../locB/locbttn.css';
import LocMenu from './locmenu';

export default class ManageLoc extends React.Component{

    // Two states to handle for now: Location of choice and temperature of said location of choice
    state = {
        displayMenu: false
    }
        
    displayMenuCMD = () => {
        this.setState({
            displayMenu: !this.state.displayMenu
        })
    }

    render() {
        console.log('this is the menu saying yo yo yo!');

    return (
        // Renders a banner via 'DIV' and using 'p'
        <div class="mngDIV">
            <div class="mngbttn">
                <button type="submit" onClick={this.displayMenuCMD}>
                    <p class="locP">Manage Locations</p>
                </button>
            </div>

            <div>
                {this.state.displayMenu ?  <LocMenu/> : null }
            </div>
        </div>
        );
    }
    
}