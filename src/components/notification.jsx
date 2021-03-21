import "react-notifications/lib/notifications.css";
import React from "react";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

const Notification = (props) => {
  const createNotification = (type) => {
    return () => {
      switch (type) {
        case "info":
          NotificationManager.warning(`WARNING! 
          Current conditions in ${props.location} are devastating.\n 
          REMINDER: Bring an umbrella!`);
          break;
        case "success":
          NotificationManager.success("Success message", "Title here");
          break;
        case "warning":
          NotificationManager.warning(
            "Warning message",
            "Close after 3000ms",
            3000
          );
          break;
        case "error":
          NotificationManager.error("Error message", "Click me!", 5000, () => {
            alert("callback");
          });
          break;
        default:
          NotificationManager.info("Info message");
          break;
      }
    };
  };

  return (
    <>
      <div style={{margin:"0px", padding: "0px",  position:"absolute", right: "67%", top: "-10%"}}>
        <button style={{borderRadius: "30px", border: "2px solid red", marginRight: "-220px", fontWeight: "700"}} className="btn btn-warning" onClick={createNotification("info")}>
          !
        </button>
      </div>
      {/* <hr />
      <button
        className="btn btn-success"
        onClick={createNotification("success")}
      >
        Success
      </button>
      <hr />
      <button
        className="btn btn-warning"
        onClick={createNotification("warning")}
      >
        Warning
      </button>
      <hr />
      <button className="btn btn-danger" onClick={createNotification("error")}>
        Error
      </button> */}

      < NotificationContainer/>
    </>
  );
};
export default Notification;
