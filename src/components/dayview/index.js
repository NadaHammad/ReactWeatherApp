// import preact
//import { h, render, Component } from 'preact';
import React from "react";
//import { h, render, Component } from 'react';

const DayView = ({ key, chance, day }) => {
  return (
    <div key={key}>
      Chance of rain on {day} is {chance * 100}%
    </div>
  );
};
export default DayView;
//{this.props.chance * 100}%
