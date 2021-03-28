import React,{   useContext,useEffect,  useState, useCallback }from "react";
// exporting the context from parent component fotr the child component to use
import $ from "jquery";
// IMPORT THE OCNTEXTS WE MUST USE
import {LocationList} from "../components/iphone/index";
import {LocalVal} from "./locmenu";
// STYLE
import  './locbttn.css';

export default function EditMenu(props){
    // LIST OF BOROUGHS TO DISPLAY
    let b =[
        ["Camden","51.5455","0.1628"],
        ["Brent","51.5673","0.2711"], 
        ["Croydon","51.3762","0.0982"], 
        ["Sutton","51.3614","0.1940"], 
        ["Harrow","51.5806","0.3420"],
        ];


    // a const for managing locations on the Location banner
    const {loc1, loc2, loc3}  = React.useContext(LocationList);
    const [locationData1, setLocationData1]  = loc1;
    const [locationData2, setLocationData2]  = loc2;
    const [locationData3, setLocationData3]  = loc3;

    // This constant holds the value, to tell us which EDIT BUTTON was pressed from the LocMenu
    // We are also passing the state of the PANEL, wherein once the data has been SET by the user, WE HIDE
    //  THE EDIT PANEL and go back to the MENU PANEL
    const { locV, editV }= useContext(LocalVal);
    const [locVal, setLocVal] = locV; // informs which location DATA to change
    const [editLoc, setE] = editV; // determines whether we hide or display the ediutPanel


    const [locationDisplay, setLocDisplay] = useState("");

    // the function for the BACK BUTTON
    const back = () => {
        setLocVal(0);
        setE(!editLoc);
    }

    // the function for CONFIRM button, that changes the name of location and changes the location to display
    const setName = () => {
        var areaName = document.getElementById("locationName").value;
        if( areaName != ""){
            localStorage.setItem("nickname", areaName)
            if(locVal == 1){
                fetchweth();
            } else if (locVal == 2){
                fetchweth();
            } else {
                fetchweth();
            }
        setLocVal(0);
        setE(!editLoc);
        } 
        if (areaName == ""){
            back();
        }
    };

    // PASSING the new details of the LOCATION BANNER
    const  parse = (parsed_json) => {
        let location =  localStorage.getItem("nickname");
        let temp_c = Math.round(parsed_json["current"]["temp"] * 10)/10;


        if(locVal == 1){
            setLocationData1({
                locate: location,
                temp: temp_c,
              });
        } else if (locVal == 2){
            setLocationData2({
                locate: location,
                temp: temp_c,
              });
        } else {
            setLocationData3({
                locate: location,
                temp: temp_c,
              });
        }

    };


    {/* -------------------------------------------    LOCATION DATA FETCHING    ------------------------------------------------------------ */}
	{/* -------------------------------------------    LOCATION DATA FETCHING    ------------------------------------------------------------ */}
	{/* -------------------------------------------    LOCATION DATA FETCHING    ------------------------------------------------------------ */}
        const fetchweth =  useCallback(() => {
            var inp = document.getElementById("boroughOptions").value;
            let url = "https://api.openweathermap.org/data/2.5/onecall?lat=" + b[inp][1] + "&lon=" + b[inp][2]  +"&units=metric&appid=79782262247ddb1d61a5a42406f46966";

            $.ajax({
            url,
            dataType: "jsonp",
            success: parse,
                error(req, err) {
                    console.log("API call failed " + err);
                },
            });
        }, []);
      

	{/* --------- END END END ------------------------    LOCATION DATA FETCHING    ---------------------- END END END  -------------------------------- */}
	{/* --------- END END END ------------------------    LOCATION DATA FETCHING    ---------------------- END END END  -------------------------------- */}
	{/* --------- END END END ------------------------    LOCATION DATA FETCHING    ---------------------- END END END  -------------------------------- */}
		 
    // sets the location details, depending on which edit button was pressed
    useEffect(() => {
        if(locVal == 1){
            setLocDisplay(locationData1.locate);
        } else if(locVal == 2){
            setLocDisplay(locationData2.locate);
        } else {
            setLocDisplay(locationData3.locate);        
        }
        // set the nickname in a local storage first before setting it inside the locationsDetails
        localStorage.setItem("nickname", '');
    });
    

    return (
        <div>
            <div className="editPanel">
                <section className="titleE">
                    <p>*Enter a nickname for the location chosen</p>
                                <section className="areaP">
                                    <textarea rows="1" cols="25" id="locationName" placeholder={locationDisplay}></textarea>
                                </section>
                                <form >
                                    {/* DISPLAYS THE BOROUGHS OF LONDON */}
                                    <select className="f" id="boroughOptions" placeholder="">
                                        <option value="0" >Camden</option>
                                        <option value="1" >Brent</option>
                                        <option value="2" >Croydon</option>
                                        <option value="3" >Sutton</option>
                                        <option value="4" >Harrow</option>
                                    </select>

                                    {/* Displays the BUTTONS confirm and back */}
                                    <div className="concanMain">
                                        <section className="concan">
                                            <button className="con" type="button" onClick={setName}>Confirm</button>
                                            <button className="can" type="button" onClick={back}>Back</button>
                                        </section> 
                                    </div>

                                </form>
                </section>
            </div>
            
        </div>
        );
}