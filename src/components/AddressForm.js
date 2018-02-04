import StateDropdown from "./StateDropdown";
import React from 'react';

const AddressForm = ({ handleChange }) => (
    <div className="field">
      <div className="fields">
        <div className="twelve wide field required">
          <label>Address:</label>
          <input type="text" placeholder="Street Address" onChange={(event) => handleChange(event, 'street')}/>
        </div>
        <div className="four wide field">
          <label>Apt #:</label>
          <input type="text" placeholder="Apt #" onChange = {(event) => handleChange(event, 'apt')}/>
        </div>
      </div>
      <div className="two fields">
        <StateDropdown handleChange={handleChange}/>
        <div className="four wide field required">
          <label>Zipcode:</label>
          <input type="text" placeholder="Zipcode" onChange = {(event) => handleChange(event, 'zipcode')}/>
        </div>    
      </div>  
    </div>
);

export default AddressForm;