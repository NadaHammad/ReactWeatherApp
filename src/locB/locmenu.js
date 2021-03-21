import React,{   useContext, useState } from "react";
// exporting the context from parent component fotr the child component to use
import { displayM } from "./mnglocbttn";
import {LocationList} from "../components/iphone/index";
import  './locbttn.css';
import EditMenu from './editpanel';

export default function LocMenu(props){

    const [editLoc, setEE] = useState("false");
    const [displayMenu, setD] = useContext(displayM);


    // a const for managing locations on the Location banner
    const {loc1, loc2, loc3}  = React.useContext(LocationList);
    const [locationData1, setLocationData1]  = loc1;
    const [locationData2, setLocationData2]  = loc2;
    const [locationData3, setLocationData3]  = loc3;

    console.log("Hi its me");
    console.log(locationData1.locate);
    console.log(locationData2.locate);
    console.log(locationData3.locate);

    const setset = () => {
        setD(!displayMenu);
    }

    const setEdit = () => {
        setEE(!editLoc);
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
                                        <button type="submit" className="editB" onClick={setEdit}>edit</button>
                                    </section>
                                </section>
                        </section>

                        <section>
                            <p className="titleP"> Location2:</p>
                                <section className="areaP">
                                    <p>{locationData2.locate}</p>
                                    <section>
                                        <button type="submit" className="editB" onClick={setEdit}>edit</button>
                                    </section>
                                </section>
                        </section>
                        
                        <section>
                            <p className="titleP">Location3:</p>
                                <div className="areaP">
                                    <p>{locationData3.locate}</p>
                                    <section>
                                        <button type="submit" className="editB" onClick={setEdit}>edit</button>
                                    </section>
                                </div>
                        </section>
                    </div>
                    : 
                    <EditMenu/>

                    }

                    <div className="concanMain">
                        { editLoc ? 
                            <section className="canonly">
                                <button type="submit" className="can" onClick={setset}>Cancel</button>
                            </section> 
                            :
                            <section className="concan">
                                <button className="con" type="submit">Confirm</button>
                                <button className="can" type="submit" onClick={setEdit}>Back</button>
                            </section> 
                        }
                    </div>
            </div>
        );
}