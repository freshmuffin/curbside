import StateDropdown from "./StateDropdown";
import React from 'react';

const AddressForm = ({}) => (
  <form className="ui form">
    <div className="field">
      <div className="fields">
        <div className="six wide field">
          Address:
          <input type="text" placeholder="Street Address" />
        </div>
        <div className="four wide field">
          Apt:
          <input type="text" placeholder="Apt #" />
        </div>
      </div>
      <div className="two fields">
        <StateDropdown/>
        <div className="four wide field">
          Zipcode:
          <input type="text" placeholder="Zipcode" />
        </div>    
      </div>  
    </div>
  </form>
);

export default AddressForm;