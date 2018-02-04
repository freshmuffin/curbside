import React from 'react';

const TimeDropdown = ({handleChange}) => (
  <div>
    <p>Time:</p>    
    <select className="ui fluid dropdown" onChange={event => handleChange(event, 'time')}>
      <option value="00:00">00:00 - 00:59</option>
      <option value="01:00:00">01:00 - 01:59</option>
      <option value="02:00:00">02:00 - 02:59</option>
      <option value="03:00:00">03:00 - 03:59</option>
      <option value="04:00:00">04:00 - 04:59</option>
      <option value="05:00:00">05:00 - 05:59</option>
      <option value="06:00:00">06:00 - 06:59</option>
      <option value="07:00:00">07:00 - 07:59</option>
      <option value="08:00:00">08:00 - 08:59</option>
      <option value="09:00:00">09:00 - 09:59</option>
      <option value="10:00:00">10:00 - 10:59</option>
      <option value="11:00:00">11:00 - 11:59</option>
      <option value="12:00:00">12:00 - 12:59</option>
      <option value="13:00:00">13:00 - 13:59</option>
      <option value="14:00:00">14:00 - 14:59</option>
      <option value="15:00:00">15:00 - 15:59</option>
      <option value="16:00:00">16:00 - 16:59</option>
      <option value="17:00:00">17:00 - 17:59</option>
      <option value="18:00:00">18:00 - 18:59</option>
      <option value="19:00:00">19:00 - 19:59</option>
      <option value="20:00:00">20:00 - 20:59</option>
      <option value="21:00:00">21:00 - 21:59</option>
      <option value="22:00:00">22:00 - 22:59</option>
      <option value="23:00:00">23:00 - 23:59</option>
    </select>
  </div>
);

export default TimeDropdown;