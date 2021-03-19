import React from "react";
import  './locbttn.css';

export default class LocMenu extends React.Component{

    // Two states to handle for now: Location of choice and temperature of said location of choice
    state = {
        area: 'AreaA',
        display: false
    }

    render() {
        //console.log('this si the menu saying yo yo yo!');


    return (
        // Renders a banner via 'DIV' and using 'p'
            <div className="MenuBox">
                <h3>Choose Locations to Edit:</h3>
                    <section>
                        <p className="titleP">Location1:</p>
                            <section className="areaP">
                                <p>{this.state.area}</p>
                                <section>
                                    <button className="editB">edit</button>
                                    <button className="delB">delete</button>
                                </section>
                            </section>
                    </section>

                    <section>
                        <p className="titleP"> Location2:</p>
                            <section className="reaP">
                                <p>{this.state.area}</p>
                                <section>
                                    <button className="editB">edit</button>
                                    <button className="delB">delete</button>
                                </section>
                            </section>
                    </section>
                    
                    <section>
                        <p className="titleP">Location3:</p>
                            <div className="areaP">
                                <p>{this.state.area}</p>
                                <section>
                                    <button className="editB">edit</button>
                                    <button className="delB">delete</button>
                                </section>
                            </div>
                    </section>

                <button type="submit">Confirm</button>
                <button type="submit">Cancel</button>
            </div>
        );
    }
    
}