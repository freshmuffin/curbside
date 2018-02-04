import React from "react";
import ReactDOM from "react-dom";

import ScheduleForm from "./components/ScheduleForm.js";

const Root = () => (
  <div>
    <div className="ui huge header center aligned"> Schedule a Pickup:</div>
    <div className="mainBox">
      <ScheduleForm />
    </div>
  </div>
)

ReactDOM.render(<Root />, document.getElementById("root"));