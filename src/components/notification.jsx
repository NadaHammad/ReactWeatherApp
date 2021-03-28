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
        //types of button the user may click on. For this project, we only implemented the info button.
        //displays a warning message when clicked on. Uses user's choice of location.
        case "info":
          NotificationManager.warning(`WARNING! 
          Current conditions in ${props.location} are devastating.\n 
          REMINDER: Bring an umbrella!`);
          break;
        case "warning":
          NotificationManager.warning(
            "Warning message",
            "This message will close after 3000ms",
            3000
          );
          break;
        case "error":
          NotificationManager.error("Something went wrong", "Click to close", 5000, () => {
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
      <div style={{margin:"0px", padding: "0px",  position:"absolute"}}>
        {/* Button which when clicked on will create a notification */}
        <button style={{borderRadius: "30px", border: "2px solid red", fontWeight: "700"}} className="btn btn-warning" onClick={createNotification("info")}>
          !
        </button>
      </div>
      < NotificationContainer/>
    </>
  );
};
export default Notification;
