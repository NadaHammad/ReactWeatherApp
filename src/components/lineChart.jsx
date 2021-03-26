
import React from "react";
import { Chart } from 'react-charts';

export default function MyChart({ rainArray, tempArray,hourlyTemp}) {

    let day = new Date();
    const [today] = useState(day);
    var [listItems,setListItems] = useState(<table></table>);
    var [hourlyTable,setHourlyTable] = useState(<table></table>);
    var [hourDisplay,setHourDisplay] =useState(false);
    const dayString = (dayint) => {
      if (dayint % 7 === 0) {
        return "Sun";
      } else if (dayint % 7 === 1) {
        return "Mon";
      } else if (dayint % 7 === 2) {
        return "Tue";
      } else if (dayint % 7 === 3) {
        return "Wed";
      } else if (dayint % 7 === 4) {
        return "Thu";
      } else if (dayint % 7 === 5) {
        return "Fri";
      } else if (dayint % 7 === 6) {
        return "Sat";
      }
      
    };

    
  function formatTime(hour){
    return hour >= 24 ? hour-24 :hour;
  }



    const data = React.useMemo(
        () => [
          {
            label: 'Temperature',
            data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
          },
          {
            label: 'Rain',
            data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
          }
        ],
        []
      )
     
      const axes = React.useMemo(
        () => [
          { primary: true, type: 'linear', position: 'bottom' },
          { type: 'linear', position: 'left' }
        ],
        []
      )
     
      const lineChart = (
        // A react-chart hyper-responsively and continuously fills the available
        // space of its parent element automatically
        <div
          style={{
            width: '400px',
            height: '300px'
          }}
        >
          <Chart data={data} axes={axes} />
        </div>
      )

      return (
          <div>{lineChart}</div>
      )
}

