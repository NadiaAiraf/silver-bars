import React from 'react';
import propTypes from 'prop-types'

  
const OrderForm = ({ formChange, formSubmit, userValue, quantity, price }) => {
  
  return (
    <div className="order-form-container">
      <h4>Order Input Form</h4>
      <input type="text" name="userID" value={userValue} placeholder="user id" onChange={formChange} />User ID<br />
      <input type="number" name="quantity" value={quantity} placeholder="order quantity" onChange={formChange}/>Quantity (in kg)<br />
      <input type="number" name="price" value={price} placeholder="price per kg" onChange={formChange}/>Price (per kg)<br />
      <input type="radio" name="isBuy" value={true} onChange={formChange} />Buy<br />
      <input type="radio" name="isBuy" value={false} onChange={formChange} />Sell<br />
      <input type="submit" value ="submit" className="submit-button" onClick={formSubmit} />
    </div>
  )
}

OrderForm.propTypes = {
  formChange: propTypes.func.isRequired,
  formSubmit: propTypes.func.isRequired,
}

export default OrderForm;