import React, { createContext, useState } from "react";
import '../locB/locbttn.css';
import LocMenu from './locmenu';

export const Context = createContext({});

export default function ManageLoc(props) {
    
    const [displayMenu, setD] = useState("true");

    const setset = () => {
        localStorage.setItem("d", displayMenu);
        setD(!eval(localStorage.getItem("d")));
    }

    React.useEffect(() => {
    
        window.addEventListener('storage', () => {
          // When local storage changes, dump the list to
          // the console.
           setD(JSON.parse(localStorage.getItem('d')) || [])   
        });
        
           
        }, [])

    return (
        // Renders a banner via 'DIV' and using 'p'
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
        );
}