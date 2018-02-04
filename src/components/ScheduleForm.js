import axios from 'axios';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import AddressForm from './AddressForm.js';
import TimeDropdown from './TimeDropdown.js';

class ScheduleForm extends Component {
  constructor() {
    super();

    this.state = {
      street: '',
      apt: '',
      state: '',
      zipcode: '',
      date: '',
      time: '00:00 - 01:00',
      phone: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmitRequest = this.handleSubmitRequest.bind(this);
  }
  
  handleInputChange(event, form) {
    this.setState({
      [form]: event.target.value
    })
  }

  handleSubmitRequest() {
    const { street, apt, state, zipcode, date, time, phone } = this.state;
    const address = street + ' ' + state + ' ' + zipcode + ', apt:' + apt;

    axios.post('/requestPickup', {
      address: address,
      date: date,
      time: time,
      phone: phone
    });
  }

  render() {
    return ( 
      <div className="center aligned ui grid">
        <div className="column five wide">
          <form className="ui form">
            <AddressForm handleChange={this.handleInputChange}/>
              <div className="two fields">
                <div className="eight wide field">
                  <label>Date:</label>
                  <input type='text' onChange={event => this.handleInputChange(event, 'date')}/>
                </div>
                <TimeDropdown handleChange={this.handleInputChange}/>
            </div>
            <div className="required field">
              <label>Phone Number:</label>
              <input type='text' onChange={event => this.handleInputChange(event, 'phone')}/>
            </div>
            <div>
              <button className="ui button" onClick={this.handleSubmitRequest}>Confirm</button>
            </div>
          </form>
        </div>
      </div>
    );
  };
}

export default ScheduleForm;