import React,{   useContext, useState } from "react";

// IMPORT the context, if the MENU is TO BE displayed or NOT
import { displayM } from "./mnglocbttn";

// IMPORT THE DETAILS OF THE 3 LOCATIONS
import {LocationList} from "../components/iphone/index";

// IMPORT THE STYLE FOR USE
import  './locbttn.css';

//  Import the Panel needed for editing the locations
import EditMenu from './editpanel';

//  Exporting the Location Value (that informs us which LOCATION out of the 3 to EDIT)
export const LocalVal = React.createContext();





// THIS IS THE LOCATION MENU COMPONENT THAT DISPLAYS THE NAME OF THE 3 LOCATIONS, AS WELL AS BUTTONS NEEDED FOR EDITING THE LOCATIONS
export default function LocMenu(props){

    const [editLoc, setE] = useState("false");
    const [displayMenu, setD] = useContext(displayM);

    // a const for managing locations on the Location banner
    const {loc1, loc2, loc3}  = React.useContext(LocationList);
    const [locationData1, setLocationData1]  = loc1;
    const [locationData2, setLocationData2]  = loc2;
    const [locationData3, setLocationData3]  = loc3;

    //  This holds the value that informs which EDIT button has been clicked on
    const [locVal, setLocVal] = useState("0");

    //  when we click on button Cancel, we chnage the display value to FALSE, to hide the MENU PANEL
    const setset = () => {
        setD(!displayMenu);
    }

    // Sets the location of BANNER 1
    const setEdit1 = () => {
        setE(!editLoc);
        setLocVal(1);
    }

    
    // Sets the location of BANNER 2
    const setEdit2 = () => {
        setE(!editLoc);
        setLocVal(2);
    }

    
    // Sets the location of BANNER 3
    const setEdit3 = () => {
        setE(!editLoc);
        setLocVal(3);
    }
    
    return (
            <div className="MenuBox">
                {editLoc ?
                    <div>
                        <h4>Choose Locations to Edit:</h4>

                            {/* displays name and temperature of LOCATION 1 */}
                            <section>
                                <p className="titleP">Location1:</p>
                                    <section className="areaP">
                                        <p>{locationData1.locate}</p>
                                        <section>
                                            <button type="submit" className="editB" onClick={setEdit1}>edit</button>
                                        </section>
                                    </section>
                            </section>

                            {/* displays name and temperature of LOCATION 2 */}
                            <section>
                                <p className="titleP"> Location2:</p>
                                    <section className="areaP">
                                        <p>{locationData2.locate}</p>
                                        <section>
                                            <button type="submit" className="editB" onClick={setEdit2}>edit</button>
                                        </section>
                                    </section>
                            </section>
                            
                            {/* displays name and temperature of LOCATION 3 */}
                            <section>
                                <p className="titleP">Location3:</p>
                                    <div className="areaP">
                                        <p>{locationData3.locate}</p>
                                        <section>
                                            <button type="submit" className="editB" onClick={setEdit3}>edit</button>
                                        </section>
                                    </div>
                            </section>
                        </div>

                    : 
                    // ONCE AN EDIT BUTTON IS CLICKED, WE DISPLAY THE EDIT PANEL
                    <LocalVal.Provider value={{locV: [locVal, setLocVal], editV: [editLoc, setE] }}>
                        <EditMenu/>
                    </LocalVal.Provider>
                }
                        {/* DISPLAYING the necessary buttons before and after we display THE EDIT PANEL*/}
                        {editLoc? 
                            <div className="concanMain">
                                    <section className="canonly">
                                        <button type="submit" className="can" onClick={setset}>Cancel</button>
                                    </section> 
                            </div>
                        : null}
                    </div>
        );
}