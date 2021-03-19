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
            <div class="MenuBox">
                <h3>Choose Locations to Edit:</h3>
                    <section>
                        <p class="titleP">Location1:</p>
                            <section class="areaP">
                                <p>{this.state.area}</p>
                                <section>
                                    <button class="editB">edit</button>
                                    <button class="delB">delete</button>
                                </section>
                            </section>
                    </section>

                    <section>
                        <p class="titleP"> Location2:</p>
                            <section class="reaP">
                                <p>{this.state.area}</p>
                                <section>
                                    <button class="editB">edit</button>
                                    <button class="delB">delete</button>
                                </section>
                            </section>
                    </section>
                    
                    <section>
                        <p class="titleP">Location3:</p>
                            <div class="areaP">
                                <p>{this.state.area}</p>
                                <section>
                                    <button class="editB">edit</button>
                                    <button class="delB">delete</button>
                                </section>
                            </div>
                    </section>

                <button type="submit">Confirm</button>
                <button type="submit">Cancel</button>
            </div>
        );
    }
    
}