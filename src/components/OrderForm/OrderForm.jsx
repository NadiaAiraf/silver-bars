import React from 'react';

class OrderForm extends React.Component {
  constructor(props) {
    super(props);
    
  }
  
  render() {
    return(
      <div className="order-form-container">
        <form className="order-form">
          <h4>Order Input Form</h4>
          <input type="text" value="" required placeHolder="user id" /><br />
          <input type="text" value="" required placeHolder="order quantity"/><br />
          <input type="text" value="" required placeHolder="price per kg"/><br />
          <input type="radio" name="orderType" value="orderType" required />Buy<br />
          <input type="radio" name="orderType" value="orderType" required />Sell<br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default OrderForm;