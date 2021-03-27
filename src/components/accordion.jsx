import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useState, useEffect } from "react";
import './accordionstyle.css';

//styling for the accordion
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: "700",
    
  },
  accordion: {
    backgroundColor: "#969696",
    opacity: 0.849,
    color: "white",
    fontWeight: "800",
    // border: "1px solid rgb(255, 255, 255)",
    padding: "2px 0 2px 0"
  }
}));

//calling the component itself - like a drop down which displays data based on what the user chooses to see
//the data itself is dependent on what is passed into the accordion.
 const SimpleAccordion=({children, title, text, dataArray})=> {
  const classes = useStyles();

  let [listItems,setListItems] = useState(<table></table>);


  useEffect(() => {

    //find current day and create an array of dates for the upcoming week as according to today
    let day = new Date();
    if (dataArray) {
      let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      let datesArray = new Array(7);
      let tempDate = day;                                                                                                                                                                                                                             
      for (let i = 0; i<7;i++){
        //gets month of temp date and adds the date number to it. The array of dates will be updated with these values.
        datesArray[i] = (months[tempDate.getMonth()] +" " + tempDate.getDate());
        //increment tempDate by 1 to go to the next day
        tempDate.setDate(tempDate.getDate()+1)
      }
      //create a row of dates to be included in the table inside the accordion.
      let dateRow = datesArray.map((date) =>
        <th key = {date}>{date}</th>
      );
      dateRow = (<tr key= "dates">{dateRow}</tr>);

      //creates a row for the data values
      if (title==="Wind") {
        //if the title prop is wind, then round each value and add "m/s" to the end (units)
        var dataRow = dataArray.map((metresPerSec,index) =>
          <th key= {index}>{Math.round(metresPerSec)}m/s</th>
        );
        dataRow = (<tr key= "temp">{dataRow}</tr>);
      } else {
        //if data is chance of rain or humidity (the only other two options), then round values and add % units
        dataRow = dataArray.map((percentData,index) =>
          <th key= {index}>{Math.round(percentData)}%</th>
        );
        dataRow = (<tr key= "temp">{dataRow}</tr>);
      }    
      //add rows to table body
      setListItems(<table className="t4" cellPadding="0" cellSpacing="0"><tbody>{dataRow}{dateRow}</tbody></table>)
    }
    //dependencies
  },[dataArray, title]);

  //set children to listItems so that children can be returned
  children = listItems;

  return (
    //classnames for styling purposes
      <div className={classes.root}>
        <Accordion className={classes.accordion}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
              <Typography  className={classes.heading}>{title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            {text}
            </Typography>
            <br></br>
            {/* Table with data is displayed here */}
            {children}
          </AccordionDetails>
        </Accordion>
      </div>
  );
}
export default SimpleAccordion