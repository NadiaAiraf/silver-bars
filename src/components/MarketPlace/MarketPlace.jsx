import React from 'react';
import BuyBoard from '../BuyBoard/BuyBoard';
import SellBoard from '../SellBoard/SellBoard';
import OrderForm from '../OrderForm/OrderForm';

class MarketPlace extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orderHistory: [],
      orderNumber: 1,
      currentOrder: {
        userID: '',
        quantity: 0,
        price: 0,
        isBuy: undefined
      },
    }
  }
  
  formSubmit = () => {
    const newOrder = Object.assign({}, this.state.currentOrder)
    newOrder.orderNumber = this.state.orderNumber;
    const newOrderNumber = this.state.orderNumber + 1;
    
    this.setState({
      orderHistory: [...this.state.orderHistory, newOrder],
      orderNumber: newOrderNumber,  
    });
    console.log(this.state);
  };
  
  formChange = (event) => {
    const name = event.target.name;
    const currentOrder = this.state.currentOrder;
    
    currentOrder[name] = event.target.value;
    
    this.setState({ currentOrder: currentOrder })
  }
  
  buyOrdersDisplay = () => {
    const buyOrders = this.state.orderHistory.filter((obj) => obj.isBuy === 'true' )

    const uniqueBuyPrice = buyOrders.map((obj) => obj.price)
                                  .filter((value, index, self) => self.indexOf(value) === index)
                                  .sort()
                                  .reverse();
    return(this._sumByKey(uniqueBuyPrice, buyOrders))
  }
  
  sellOrdersDisplay = () => {
    const sellOrders = this.state.orderHistory.filter((obj) => obj.isBuy === 'false' )

    const uniqueSellPrice = sellOrders.map((obj) => obj.price)
                                  .filter((value, index, self) => self.indexOf(value) === index)
                                  .sort();
    
    return(this._sumByKey(uniqueSellPrice, sellOrders))
  }
  
  _sumByKey = (uniquePrices, allOrders) => {
    const output = [];
    
    for (var i = 0; i < uniquePrices.length; i++) {
      const filterSell = allOrders.filter((obj) => obj.price === uniquePrices[i] )
      const orderNumbers = filterSell.map((order) => order.orderNumber).join(' + order ')
      const quantity = filterSell.reduce((total, obj) => parseFloat(obj.quantity) + total, 0)
      output.push(quantity.toString() + " kg for £" + uniquePrices[i].toString() + ' // order ' + orderNumbers)
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