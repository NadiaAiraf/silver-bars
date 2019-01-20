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
      currentOrder: {
        name: '',
        quantity: 0,
        price: 0,
        isBuy: undefined
      },
    }
  }
  
  formSubmit = (event) => {
    console.log(event)
    let newOrder = this.state.currentOrder;
    
    if (this.state.currentOrder.isBuy) {
      let buyHistory = this.state.buyOrders;
      buyHistory.push(newOrder)
      this.setState({ buyOrders: buyHistory })
    } else {
      let sellHistory = this.state.sellOrders;
      sellHistory.push(newOrder)
      this.setState({ sellOrders: sellHistory })     
    }
  }
  
  formChange = (event) => {
    console.log(event.target)
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
        <OrderForm 
          userValue={this.state.currentOrder.name}
          formChange={this.formChange}
          formSubmit={this.formSubmit}
        />
      </div>
    )
  }
}

export default MarketPlace;