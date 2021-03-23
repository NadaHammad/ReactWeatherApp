import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useState, useEffect } from "react";
import './accordionstyle.css';

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
    fontWeight: "900",
    // border: "1px solid rgb(255, 255, 255)",
    padding: "2px 0 2px 0",
    textAlign: "center !important",
  }
}));

 const SimpleAccordion=({children, title, text, dataArray})=> {
  const classes = useStyles();

  let day = new Date();
  const [today] = useState(day);
  var [listItems,setListItems] = useState(<table></table>);


  useEffect(() => {
  if (dataArray) {

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    //variable for day number and month
    let datesArray = new Array(14);
    let tempDate = today;                                                                                                                                                                                                                             
    for (let i = 0; i<7;i++){

      datesArray[i] = (months[tempDate.getMonth()] +" " + tempDate.getDate());
      
      tempDate.setDate(tempDate.getDate()+1)
    }
    let dateRow = datesArray.map((date) =>
      <th  key= {date}>{date}</th>
    );
    dateRow = (<tr  key= "dates">{dateRow}</tr>);

    //Row of data
    if (title==="Wind") {
        var dataRow = dataArray.map((metresPerSec,index) =>
            <th key= {index}>{Math.round(metresPerSec)}m/s</th>
        );
        dataRow = (<tr key= "temp">{dataRow}</tr>);
    } else {
        dataRow = dataArray.map((percentData,index) =>
            <th key= {index}>{Math.round(percentData)}%</th>
        );
        dataRow = (<tr key= "temp">{dataRow}</tr>);
    }    
    setListItems(<table  cellPadding="1" cellSpacing="0"><tbody>{dataRow}{dateRow}</tbody></table>)

  }

  },[dataArray, title, today]);

  children = listItems;

  return (
    <div className={classes.root}>
      <Accordion className={classes.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {text}
          </Typography>
          <br></br>
          {children}
          
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
export default SimpleAccordion