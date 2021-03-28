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
        ["Barking and Dagenham","51.5499978","0.1166662"],
        ["Barnet","51.6254", "-0.1527"],
        ["Bexley","51.416665", "0.1333328"],
        ["Brent","51.559664428", "-0.270998916"],
        ["Bromley","51.4042", "0.0168"],
        ["Camden","51.54057","-0.14334"],
        ["City of London","51.51279","51.51279 -0.09184"],
        ["Croydon","51.333332", "-0.083333"],
        ["Ealing","51.499998", "-0.333332"],
        ["Enfield","51.65147", "-0.08497"],
        ["Greenwich","51.4499982", "0.0499998"],
        ["Hackney","51.553164454","-0.056833106"],
        ["Hammersmith and Fulham","51.499998", "-0.249999"],
        ["Haringey","51.601632", "-0.112915"],
        ["Harrow","51.57142", "-0.33371"],
        ["Havering","51.549997", "0.2166658"],
        ["Hillingdon","51.5307", "-0.4419"],
        ["Hounslow","51.467164798","-0.356998572"],
        ["Islington","51.53622","-0.10304"],
        ["Kensington and Chelsea","51.500497998" ,"-0.189665908"],
        ["Kingston upon Thames","51.39","-0.28"],
        ["Lambeth","51.416665","-0.1333328"],
        ["Lewisham","51.416665","-0.0333332"],
        ["Merton","51.3833318","-0.166666]"],
        ["Newham","51.528","0.027"],
        ["Redbridge","51.5666644" ,"0.083333"],
        ["Richmond upon Thames","51.46171", "-0.30633"],
        ["Southwark","51.4499982" ,"-0.083333"],
        ["Sutton","51.35" ,"-0.2"],
        ["Tower Hamlets","51.521831246","-0.033499866"],
        ["Waltham Forest","51.5666644","-0.0333332"],
        ["Wandsworth","51.4543815158","-0.190249239"],
        ["Westminster","51.492914695","-0.1215161806"]
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
                                    <select className="f" id="boroughOptions">
                                        <option value ="0">Barking and Dagenham</option>
                                        <option value ="1">Barnet</option>
                                        <option value ="2">Bexley</option>
                                        <option value ="3">Brent</option>
                                        <option value ="4">Bromley</option>
                                        <option value ="5">Camden</option>
                                        <option value ="6">City of London</option>
                                        <option value ="7">Croydon</option>
                                        <option value ="8">Ealing</option>
                                        <option value ="9">Enfield</option>
                                        <option value ="10">Greenwich</option>
                                        <option value ="11">Hackney</option>
                                        <option value ="12">Hammersmith and Fulham</option>
                                        <option value ="13">Haringey</option>
                                        <option value ="14">Harrow</option>
                                        <option value ="15">Havering</option>
                                        <option value ="16">Hillingdon</option>
                                        <option value ="17">Hounslow</option>
                                        <option value ="18">Islington</option>
                                        <option value ="19">Kensington and Chelsea</option>
                                        <option value ="20">Kingston upon Thames</option>
                                        <option value ="21">Lambeth</option>
                                        <option value ="22">Lewisham</option>
                                        <option value ="23">Merton</option>
                                        <option value ="24">Newham</option>
                                        <option value ="25">Redbridge</option>
                                        <option value ="26">Richmond upon Thames</option>
                                        <option value ="27">Southwark</option>
                                        <option value ="28">Sutton</option>
                                        <option value ="29">Tower Hamlets</option>
                                        <option value ="30">Waltham Forest</option>
                                        <option value ="31">Wandsworth</option>
                                        <option value ="32">Westminster</option>
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