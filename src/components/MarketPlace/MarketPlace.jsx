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
        userID: '',
        quantity: 0,
        price: 0,
        isBuy: undefined
      },
    }
  }
  
  formSubmit = () => {
    console.log(this.state)
    const newOrder = Object.assign({}, this.state.currentOrder)
    
    if (this.state.currentOrder.isBuy === 'true') {
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
    const target = event.target;
    const name = target.name;
    const currentOrder = this.state.currentOrder;
    
    currentOrder[name] = event.target.value;
    
    this.setState({ currentOrder: currentOrder })
  }
  
  buyOrdersDisplay = () => {
    const buyOrders = this.state.buyOrders
    
    if (buyOrders === []) {
      return([])
    }

    const uniqueBuyPrice = buyOrders.map((obj) => obj.price)
                                  .filter((value, index, self) => self.indexOf(value) === index)
                                  .sort()
                                  .reverse();
    const output = [];
    
    for (var i = 0; i < uniqueBuyPrice.length; i++) {
      const filterBuy = buyOrders.filter((obj) => obj.price === uniqueBuyPrice[i] )
      const quantity = filterBuy.reduce((total, obj) => parseFloat(obj.quantity) + total, 0)
      output.push(quantity.toString() + " kg for £" + uniqueBuyPrice[i].toString())
    } 

    return output;
  }
  
  sellOrdersDisplay = () => {
    const sellOrders = this.state.sellOrders

    if (sellOrders === []) {
      return([])
    }


    const uniqueSellPrice = sellOrders.map((obj) => obj.price)
                                  .filter((value, index, self) => self.indexOf(value) === index)
                                  .sort();
                                  
    const output = [];
    
    for (var i = 0; i < uniqueSellPrice.length; i++) {
      const filterSell = sellOrders.filter((obj) => obj.price === uniqueSellPrice[i] )
      const quantity = filterSell.reduce((total, obj) => parseFloat(obj.quantity) + total, 0)
      output.push(quantity.toString() + " kg for £" + uniqueSellPrice[i].toString())
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
          sellOrders={this.sellOrdersDisplay()}
        />
        <OrderForm 
          userID={this.state.currentOrder.userID}
          quantity={this.state.currentOrder.quantity}
          price={this.state.currentOrder.price}
          formChange={this.formChange}
          formSubmit={this.formSubmit}
        />
      </div>
    )
  }
}

export default MarketPlace;