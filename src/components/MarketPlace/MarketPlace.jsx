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
  
  buyOrdersDisplay = () => {
    const buyOnly = this.state.buyOrders
                        .filter((obj) => obj.isBuy === true);

    const uniqueBuyPrice = buyOnly.map((obj) => obj.price)
                                  .filter((value, index, self) => self.indexOf(value) === index)
                                  .sort()
                                  .reverse();
    const output = [];
    
    for (var i = 0; i < uniqueBuyPrice.length; i++) {
      const filterBuy = buyOnly.filter((obj) => obj.price === uniqueBuyPrice[i] )
      const quantity = filterBuy.reduce((total, obj) => obj.quantity + total, 0)
      output.push(quantity.toString() + " kg for £" + uniqueBuyPrice[i].toString())
    } 

    return output;
  }
  
  render() {
    return(
      <div className="marketplace-container">
        <h2>Silver Bars Marketplace</h2>
        <BuyBoard 
          buyOrders={this.buyOrdersDisplay()}
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