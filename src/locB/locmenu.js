import React, { useState } from "react";
import  './locbttn.css';

export default function LocMenu(props){

    const [area, setArea] = useState("tempA");
    const [display, setD] = useState("tempD");

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

                    <div className="concanMain">
                        <section className="concan">
                            <button className="con" type="submit">Confirm</button>
                            <button className="can" type="submit">Cancel</button>
                        </section>
                    </div>
            </div>
        );
}