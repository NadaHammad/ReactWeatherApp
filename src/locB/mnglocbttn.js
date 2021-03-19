import React, { useState } from "react";
import '../locB/locbttn.css';
import LocMenu from './locmenu';

export default function ManageLoc(props) {


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