import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ScheduleForm from "./components/ScheduleForm.js";
import Confirmation from "./components/Confirmation.js";


const Router = () => (
  <div>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={ScheduleForm}/>
        <Route path='/confirmation' component={Confirmation}/>
      </Switch>
    </BrowserRouter>  
  </div>
);

export default Router;


