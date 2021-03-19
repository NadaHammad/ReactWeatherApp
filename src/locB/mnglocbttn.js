import React, { useState } from "react";
import '../locB/locbttn.css';
import LocMenu from './locmenu';

export default function ManageLoc(props) {

    // Two states to handle for now: Location of choice and temperature of said location of choice
    // state = {
    //     displayMenu: false
    // }
        
    // displayMenuCMD = () => {
    //     this.setState({
    //         displayMenu: !this.state.displayMenu
    //     })
    // }

    // render() 
    //     //console.log('this is the menu saying yo yo yo!');

    return (
        // Renders a banner via 'DIV' and using 'p'
        <div className="mngDIV">
            <div className="mngbttn">
                <button type="submit" >
                    <p className="locP">Manage Locations</p>
                </button>
            </div>

            <div>
                {/* {displayMenu.display ?  <LocMenu/> : null } */}
            </div>
        </div>
        );
    
}