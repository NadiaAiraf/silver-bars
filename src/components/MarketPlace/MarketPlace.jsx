import React from 'react';
import BuyBoard from '../BuyBoard/BuyBoard';
import SellBoard from '../SellBoard/SellBoard';
import OrderForm from '../OrderForm/OrderForm';

class MarketPlace extends React.Component {
  
  render() {
    return(
      <div className="marketplace-container">
        this is the market place
        <BuyBoard />
        <SellBoard />
        <OrderForm />
      </div>
    )
  }
}

export default MarketPlace;