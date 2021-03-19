import React, { useState } from "react";
import '../locB/locbttn.css';
import LocMenu from './locmenu';

export default function ManageLoc(props) {

    const displayMenu = useState("true");

    return (
        // Renders a banner via 'DIV' and using 'p'
        <div class="mngDIV">
            <div class="mngbttn">
                <button type="submit" onClick={this.displayMenuCMD}>
                    <p class="locP">Manage Locations</p>
                </button>
            </div>

            <div>
                {displayMenu.display ?  <LocMenu/> : null }
            </div>
        </div>
        );
    
}