import logo from "./logo.svg";
import "./App.css"; // import required Components from 'components/'
import Iphone from "./components/iphone/index.js";
import React from "react";
//import Notifications, {notify} from 'react-notify-toast';

const App = () => {
  return (
    <div className="App">
      <Iphone />
    </div>
  );
};

export default App;
