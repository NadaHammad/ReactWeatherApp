import React,{   useContext, useState } from "react";
// exporting the context from parent component fotr the child component to use
import { displayM } from "./mnglocbttn";
import {LocationList} from "../components/iphone/index";
import  './locbttn.css';

export default function EditMenu(props){

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
            <div className="editPanel">
                <section className="titleP">
                    <p>*Enter a nickname for the location chosen</p>
                </section>
            </div>
        );
}