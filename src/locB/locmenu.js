import React,{   useContext, useState } from "react";
// exporting the context from parent component fotr the child component to use
import { displayM } from "./mnglocbttn";

import  './locbttn.css';

export default function LocMenu(props){

    const [area, setAA] = useState("tempA");
    const [editLoc, setEE] = useState("false");
    const [displayMenu, setD] = useContext(displayM);

    const setset = () => {
        setD(!displayMenu);
    }

    return (
        // Renders a banner via 'DIV' and using 'p'
            <div className="MenuBox">
                <h4>Choose Locations to Edit:</h4>
                    <section>
                        <p className="titleP">Location1:</p>
                            <section className="areaP">
                                <p>{area}</p>
                                <section>
                                    <button type="submit" className="editB">edit</button>
                                    <button type="submit" className="delB">delete</button>
                                </section>
                            </section>
                    </section>

                    <section>
                        <p className="titleP"> Location2:</p>
                            <section className="areaP">
                                <p>{area}</p>
                                <section>
                                    <button type="submit" className="editB">edit</button>
                                    <button type="submit" className="delB">delete</button>
                                </section>
                            </section>
                    </section>
                    
                    <section>
                        <p className="titleP">Location3:</p>
                            <div className="areaP">
                                <p>{area}</p>
                                <section>
                                    <button type="submit" className="editB">edit</button>
                                    <button type="submit" className="delB">delete</button>
                                </section>
                            </div>
                    </section>

                {props ? 
                    <div className="concanMain">
                        { editLoc ? 
                            <section className="canonly">
                                <button type="submit" className="can" onClick={setset}>Cancel</button>
                            </section> 
                            :
                            <section className="concan">
                                <button className="con" type="submit">Confirm</button>
                                <button className="can" type="submit">Cancel</button>
                            </section> 
                        }
                    </div>
                :null}
            </div>
        );
}