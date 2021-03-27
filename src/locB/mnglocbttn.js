import React, { useState } from "react";
import '../locB/locbttn.css'; // THE STYLE
import LocMenu from './locmenu'; // GET THE CHILD COMPONENT
// exporting context for the child components to import and use
export const displayM = React.createContext();


export default function ManageLoc(props) {
    // CONSTANT THAT HOLDS THE DISPLAY STATE
    // This decides whether we show the MENU for MANAGING locations. The button "Manage Locations" changes this state
    const [displayMenu, setD] = useState("true");

    //  Function used to change the display state. 
    const setset = () => {
        setD(!displayMenu);
    }

    return (
        // WRAP the context for the child component to use
        <displayM.Provider value={[displayMenu, setD]}> 
            <div className="mngDIV">
                <div className="mngbttn">
                    {/* ON CLICK, WE SWITCH THE DISPLAY OF THE MENU*/}
                    <button type="submit" onClick={setset}>
                        <p className="locP">Manage Locations</p>
                    </button>
                </div>

                {/* THIS IS THE MENU PANEL that only shows when display si set to true */}
                <div>
                    { displayMenu ? null: <LocMenu displayMenu={displayMenu}/> }
                </div>
            </div>
        </displayM.Provider>
        );
}