import React from 'react';
import propTypes from 'prop-types'

  
const OrderForm = ({ formChange, formSubmit }) => {
  
  return (
    <div className="order-form-container">
      <form className="order-form" onSubmit={formSubmit}>
        <h4>Order Input Form</h4>
        <input type="text" value="" placeholder="user id" onChange={formChange} /><br />
        <input type="text" value="" placeholder="order quantity" onChange={formChange}/><br />
        <input type="text" value="" placeholder="price per kg" onChange={formChange}/><br />
        <input type="radio" name="orderType" value="orderType" onChange={formChange} />Buy<br />
        <input type="radio" name="orderType" value="orderType" onChange={formChange} />Sell<br />
        <input type="submit" value="Submit" className="submit-button" onChange={formChange} />
      </form>
    </div>
  )
}

OrderForm.propTypes = {
  formChange: propTypes.func.isRequired,
  formSubmit: propTypes.func.isRequired,
}

export default OrderForm;