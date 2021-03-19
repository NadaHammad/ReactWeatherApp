import React, { useState } from "react";
import '../locB/locbttn.css';
import LocMenu from './locmenu';

export default function ManageLoc(props) {

    const [displayMenu, setD] = useState("true");
    
    return (
        // Renders a banner via 'DIV' and using 'p'
        <div className="mngDIV">
            <div className="mngbttn">
                <button type="submit" onClick={() => setD(!displayMenu)}>
                    <p className="locP">Manage Locations</p>
                </button>
            </div>

            <div>
                {displayMenu ?  null : <LocMenu/> }
            </div>
        </div>
        );
}