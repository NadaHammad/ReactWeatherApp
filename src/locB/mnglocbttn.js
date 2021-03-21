import React, { useState } from "react";
import '../locB/locbttn.css';
import LocMenu from './locmenu';
// exporting context for the child components to import and use
export const displayM = React.createContext();


export default function ManageLoc(props) {
    
    const [displayMenu, setD] = useState("true");

    const setset = () => {
        setD(!displayMenu);
    }

    return (
        // Renders a banner via 'DIV' and using 'p'
        // input context values for the child component to use
        <displayM.Provider value={[displayMenu, setD]}> 
            <div className="mngDIV">
                <div className="mngbttn">
                    <button type="submit" onClick={setset}>
                        <p className="locP">Manage Locations</p>
                    </button>
                </div>

                <div>
                    { displayMenu ? null: <LocMenu displayMenu={displayMenu}/> }
                </div>
            </div>
        </displayM.Provider>
        );
}