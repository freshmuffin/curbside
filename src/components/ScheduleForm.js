import axios from 'axios';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class ScheduleForm extends Component { 
  constructor(props) { 
    super(props);
    
    this.state = {
      address: '',
      date: '',
      time: '',
      phone: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmitRequest = this.handleSubmitRequest.bind(this);
  }

  handleInputChange(event, form) {

    if (form === 'address') {
      this.setState({
        address: event.target.value
      })
    } else if (form === 'date') {
      this.setState({
        date: event.target.value
      })
    } else if (form === 'time') {
      this.setState({
        time: event.target.value
      })
    } else if (form === 'phone') {
      this.setState({
        phone: event.target.value
      })
    }
  }

  handleSubmitRequest() {
    const { address, date, time, phone } = this.state;

    axios.post('/requestPickup', {
      address: address,
      date: date,
      time: time,
      phone: phone
    });
  }

  render() {
    return (
      <div>
        Address: <input type='text' onChange={event => this.handleInputChange(event, 'address')}/>
        Date: <input type='text' onChange={event => this.handleInputChange(event, 'date')}/>
        Time: <input type='text' onChange={event => this.handleInputChange(event, 'time')}/>
        Phone Number: <input type='text' onChange={event => this.handleInputChange(event, 'phone')}/>        
        <button onClick={this.handleSubmitRequest}>Save</button>
      </div>
    );
  };
}

export default ScheduleForm;

{/* <select name="aircraftSizes"
value={this.state.aircraftSize}
onChange={event => this.handleAircraftSize(event)}>
  <option value="S">S-Small</option>
  <option value="L">L-Large</option>
</select> */}