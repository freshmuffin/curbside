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
      time: '',
      phone: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmitRequest = this.handleSubmitRequest.bind(this);
    this.validateForm = this.validateForm.bind(this);
  }
  
  handleInputChange(event, form) {
    this.setState({
      [form]: event.target.value
    })
  }

  handleSubmitRequest() {
    const { street, apt, state, zipcode, date, time, phone } = this.state;
    const address = street + ' ' + state + ' ' + zipcode + ', apt:' + apt;

    if (!this.validateForm()) {
      return alert('Please enter in all required fields')
    }
  
    axios.post('/requestPickup', {
      address: address,
      date: date,
      time: time,
      phone: phone
    });
  }

  validateForm() {
    const { street, state, zipcode, date, time, phone } = this.state;

    return street && state && zipcode && date && time && phone ? true : false;
  }

  render() {
    return ( 
      <div className="center aligned ui grid">
        <div className="column seven wide">
          <form className="ui form">
            <AddressForm handleChange={this.handleInputChange}/>
              <div className="two fields">
                <div className="eight wide field required">
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
              <button type="button" className="ui button violet" onClick={this.handleSubmitRequest}>Confirm</button>
            </div>
          </form>
        </div>
      </div>
    );
  };
}

export default ScheduleForm;