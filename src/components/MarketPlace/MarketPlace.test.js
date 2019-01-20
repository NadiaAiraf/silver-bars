import React from 'react';
import { mount, shallow } from 'enzyme';
import MarketPlace from './MarketPlace';
import BuyBoard from '../BuyBoard/BuyBoard';
import SellBoard from '../SellBoard/SellBoard';
import OrderForm from '../OrderForm/OrderForm';

describe('MarketPlace', () => {
  let wrapper;
  
  beforeEach(() => wrapper = shallow(<MarketPlace />));
  
  it('renders a div', () => {
    expect(wrapper.find('div').length).toEqual(1)
  })
  
  it('should render a BuyBoard component', () => {
    let fakeBoard = <BuyBoard buyOrders={wrapper.instance().state.buyOrders} />
    expect(wrapper.containsMatchingElement(fakeBoard)).toEqual(true)
  })
  
  it('should render a SellBoard component', () => {
    let fakeSellBoard = <SellBoard sellOrders={wrapper.instance().state.sellOrders} />
    expect(wrapper.containsMatchingElement(fakeSellBoard)).toEqual(true)
  })
  
  it('should render a OrderForm component', () => {
    let fakeOrderForm = <OrderForm
                          formChange={wrapper.instance().formChange}
                          formSubmit={wrapper.instance().formSubmit}
                        />
    expect(wrapper.containsMatchingElement(fakeOrderForm)).toEqual(true)
  })
})

describe('Mounted MarketPlace', () => {
  let wrapper;
  
  beforeEach(() => wrapper = mount(<MarketPlace />))
  
  // it('calls formSubmit when an order form is submitted', () => {
  //   const orderSpy = jest.spyOn(wrapper.instance(), 'formSubmit')
  //   wrapper.instance().forceUpdate();
  //   wrapper.find('.submit-button').first().simulate('click')
  //   expect(orderSpy).toHaveBeenCalledTimes(1);
  // })
})

describe('formSubmit', () => {
  let wrapper;
  
  beforeEach(() => wrapper = shallow(<MarketPlace />))
  
  it('updates buyOrders if buy is true', () => {
    let order = { userID: '1234',
        quantity: '6',
        price: '304',
        isBuy: 'true'
      };
    wrapper.setState({ currentOrder: order })
    wrapper.instance().formSubmit();
    expect(wrapper.state('sellOrders')).toEqual([])
    expect(wrapper.state('buyOrders')).toEqual([order])
  }) 
  
  it('updates sellOrders if buy is false', () => {
    let order = { 
        userID: '1234',
        quantity: '6',
        price: '304',
        isBuy: 'false'
      };
    wrapper.setState({ currentOrder: order })
    wrapper.instance().formSubmit();
    expect(wrapper.state('buyOrders')).toEqual([])
    expect(wrapper.state('sellOrders')).toEqual([order])
  })
})

describe('buyOrdersDisplay', () => {
  let wrapper;
  
  beforeEach(() => wrapper = shallow(<MarketPlace />));
  
  it('returns an array of the buy orders, summed up', () => {
    let order = { 
      userID: '1234',
      quantity: 6,
      price: 304,
      isBuy: 'true'
    };
    wrapper.setState({ buyOrders:  [order, order] })
    expect(wrapper.instance().buyOrdersDisplay()).toEqual(['12 kg for £304'])
  })  
  
  it('returns array in price order, highest to lowest', () => {
    let order1 = { 
      userID: '1234',
      quantity: 6,
      price: 304,
      isBuy: 'true'
    };
    let order2 = { 
      userID: '4321',
      quantity: 6,
      price: 303,
      isBuy: 'true'
    };
    let order3 = { 
      userID: '2313',
      quantity: 6,
      price: 305,
      isBuy: 'true'
    };
    wrapper.setState({ buyOrders:  [order1, order2, order3] })
    expect(wrapper.instance().buyOrdersDisplay()).toEqual(
      ['6 kg for £305','6 kg for £304','6 kg for £303']
    )
  })
})

describe('sellOrdersDisplay', () => {
  let wrapper;
  
  beforeEach(() => wrapper = shallow(<MarketPlace />));
  
  it('returns an array of the sell orders, summed up', () => {
    let order = { 
      userID: '1234',
      quantity: 6,
      price: 304,
      isBuy: 'false'
    };
    wrapper.setState({ sellOrders:  [order, order] })
    expect(wrapper.instance().sellOrdersDisplay()).toEqual(['12 kg for £304'])
  })  
  
  it('returns array in price order, lowest to highest', () => {
    let order1 = { 
      userID: '1234',
      quantity: 6,
      price: 304,
      isBuy: 'false'
    };
    let order2 = { 
      userID: '4321',
      quantity: 6,
      price: 303,
      isBuy: 'false'
    };
    let order3 = { 
      userID: '2313',
      quantity: 6,
      price: 305,
      isBuy: 'false'
    };
    wrapper.setState({ sellOrders:  [order1, order2, order3] })
    expect(wrapper.instance().sellOrdersDisplay()).toEqual(
      ['6 kg for £303','6 kg for £304','6 kg for £305']
    )
  })
})