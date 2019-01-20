import React from 'react';
import BuyBoard from '../BuyBoard/BuyBoard';
import SellBoard from '../SellBoard/SellBoard';
import OrderForm from '../OrderForm/OrderForm';

class MarketPlace extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buyOrders: [],
      sellOrders: [],
    }
  }
  
  render() {
    return(
      <div className="marketplace-container">
        this is the market place
        <BuyBoard 
          buyOrders={this.state.buyOrders}
        />
        <SellBoard 
          sellOrders={this.state.sellOrders}
        />
        <OrderForm />
      </div>
    )
  }
}

export default MarketPlace;