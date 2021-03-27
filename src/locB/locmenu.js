import React,{   useContext, useState } from "react";

// IMPORT the context from parent components to the child component to use
import { displayM } from "./mnglocbttn";
import {LocationList} from "../components/iphone/index";

// IMPORT THE STYLE FOR USE
import  './locbttn.css';

//  Import the Panel needed for editing the locations
import EditMenu from './editpanel';

//  Exporting the Location Value
export const LocalVal = React.createContext();


export default function LocMenu(props){

    const [editLoc, setE] = useState("false");
    const [displayMenu, setD] = useContext(displayM);

    // a const for managing locations on the Location banner
    const {loc1, loc2, loc3}  = React.useContext(LocationList);
    const [locationData1, setLocationData1]  = loc1;
    const [locationData2, setLocationData2]  = loc2;
    const [locationData3, setLocationData3]  = loc3;


    const [locVal, setLocVal] = useState("0");


    const setset = () => {
        setD(!displayMenu);
    }

    const setEdit = () => {
        setE(!editLoc);
    }
    const setEdit1 = () => {
        setE(!editLoc);
        setLocVal(1);
    }
    const setEdit2 = () => {
        setE(!editLoc);
        setLocVal(2);
    }
    const setEdit3 = () => {
        setE(!editLoc);
        setLocVal(3);
    }
    
    return (
        // Renders a banner via 'DIV' and using 'p'
            <div className="MenuBox">
                {editLoc ?
                    <div>
                        <h4>Choose Locations to Edit:</h4>

                            <section>
                                <p className="titleP">Location1:</p>
                                    <section className="areaP">
                                        <p>{locationData1.locate}</p>
                                        <section>
                                            <button type="submit" className="editB" onClick={setEdit1}>edit</button>
                                        </section>
                                    </section>
                            </section>

                            <section>
                                <p className="titleP"> Location2:</p>
                                    <section className="areaP">
                                        <p>{locationData2.locate}</p>
                                        <section>
                                            <button type="submit" className="editB" onClick={setEdit2}>edit</button>
                                        </section>
                                    </section>
                            </section>
                            
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
                    <LocalVal.Provider value={{locV: [locVal, setLocVal], editV: [editLoc, setE] }}>
                        <EditMenu/>
                    </LocalVal.Provider>
                }
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