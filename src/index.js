import React from "react";
import ReactDOM from "react-dom";

import ScheduleForm from "./components/ScheduleForm.js";

const Root = () => (
  <div className="mainBox">
    <div className="ui huge header center aligned violet"> Schedule a Pickup:</div>
    <ScheduleForm />
  </div>
)

ReactDOM.render(<Root />, document.getElementById("root"));