import axios from 'axios';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class ScheduleForm extends Component { 
  constructor(props) { 
    super(props);
    
    this.state = {
      address: '',
      date: '',
      time: ''
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
    }
  }

  handleSubmitRequest() {
    const { address, date, time } = this.state;

    axios.post('/requestPickup', {
      address: address,
      date: date,
      time: time
    });
  }

  render() {
    return (
      <div>
        Address: <input type='text' onChange={event => this.handleInputChange(event, 'address')}/>
        Date: <input type='text' onChange={event => this.handleInputChange(event, 'date')}/>
        Time <input type='text' onChange={event => this.handleInputChange(event, 'time')}/>
        <button onClick={this.handleSubmitRequest}>Save</button>
      </div>
    );
  };
}

export default ScheduleForm;