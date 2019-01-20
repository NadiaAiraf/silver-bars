import React from 'react';

const SellBoard = () => (
    <div className="order-form-container">
      <form className="order-form">
        this is the order form<br />
        <input type="text" value="" required placeHolder="user id" /><br />
        <input type="text" value="" required placeHolder="order quantity"/><br />
        <input type="text" value="" required placeHolder="price per kg"/><br />
        <input type="text" value="" required placeHolder="buy or sell"/><br />
        <input type="submit" value="Submit" />
      </form>
    </div>
)

export default SellBoard;