import React from 'react';
import { mount, shallow } from 'enzyme';
import MarketPlace from './MarketPlace';
import BuyBoard from '../BuyBoard/BuyBoard';
import SellBoard from '../SellBoard/SellBoard';
import OrderForm from '../OrderForm/OrderForm';
import RemoveOrder from '../RemoveOrder/RemoveOrder';

describe('MarketPlace', () => {
  let wrapper;
  
  beforeEach(() => wrapper = shallow(<MarketPlace />));
  
  it('renders a div', () => {
    expect(wrapper.find('div').length).toEqual(1)
  })
  
  it('should render a BuyBoard component', () => {
    let fakeBoard = <BuyBoard buyOrders={wrapper.instance().buyOrders} />
    expect(wrapper.containsMatchingElement(fakeBoard)).toEqual(true)
  })
  
  it('should render a SellBoard component', () => {
    let fakeSellBoard = <SellBoard sellOrders={wrapper.instance().sellOrders} />
    expect(wrapper.containsMatchingElement(fakeSellBoard)).toEqual(true)
  })
  
  it('should render a OrderForm component', () => {
    let fakeOrderForm = <OrderForm
                          formChange={wrapper.instance().formChange}
                          formSubmit={wrapper.instance().formSubmit}
                        />
    expect(wrapper.containsMatchingElement(fakeOrderForm)).toEqual(true)
  })
  
  it('should render a removeOrder component', () => {
    expect(wrapper.containsMatchingElement(<RemoveOrder />)).toEqual(true)
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
  
  it('updates orderHistory', () => {
    let order = { 
        userID: '1234',
        quantity: '6',
        price: '304',
        isBuy: 'true',
        orderNumber: 1
      };
    wrapper.setState({ currentOrder: order })
    wrapper.instance().formSubmit();
    expect(wrapper.state('orderHistory')).toEqual([order])
  }) 
  
  it('updates orderHistory and the orderNumber', () => {
    let order = { 
        userID: '1234',
        quantity: '6',
        price: '304',
        isBuy: 'false',
        orderNumber: 1
      };
    wrapper.setState({ currentOrder: order })
    wrapper.instance().formSubmit();
    wrapper.instance().formSubmit();
    expect(wrapper.state('orderHistory')).toEqual([
      order,
      { 
        userID: '1234',
        quantity: '6',
        price: '304',
        isBuy: 'false',
        orderNumber: 2
      }
    ])
  })
})

describe('formChange', () => {
  let wrapper;
  
  beforeEach(() => wrapper = shallow(<MarketPlace />))

  it('updates the currentOrder state given an event object with name/target/value', () =>{
    wrapper.setState({
      currentOrder: {
        useriD: '1234',
        quantity: '2',
        price: '3',
        isBuy: 'false'
      }
    })
    let madeUpEvent = {
      target: {
        name: 'quantity',
        value: '6'
      }
    };
    wrapper.instance().formChange(madeUpEvent);
    expect(wrapper.state('currentOrder')).toEqual({
      useriD: '1234',
      quantity: '6',
      price: '3',
      isBuy: 'false'
    });
  });
});

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
    wrapper.setState({ orderHistory:  [order, order] })
    expect(wrapper.instance().buyOrdersDisplay()).toEqual(['12 kg for £304 // order  + order '])
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
    wrapper.setState({ orderHistory:  [order1, order2, order3] })
    expect(wrapper.instance().buyOrdersDisplay()).toEqual(
      ['6 kg for £305 // order ','6 kg for £304 // order ','6 kg for £303 // order ']
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
    wrapper.setState({ orderHistory:  [order, order] })
    expect(wrapper.instance().sellOrdersDisplay()).toEqual(['12 kg for £304 // order  + order '])
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
    wrapper.setState({ orderHistory:  [order1, order2, order3] })
    expect(wrapper.instance().sellOrdersDisplay()).toEqual(
      ['6 kg for £303 // order ','6 kg for £304 // order ','6 kg for £305 // order ']
    )
  })
})

describe('removeOrderChange', () => {
  let wrapper;
  
  beforeEach(() => wrapper = shallow(<MarketPlace />));
  
  it('sets the orderNumber that will be removed given event.target.value', () => {
     let fakeEvent = { target: { value: 7 }};
     wrapper.instance().removeOrderChange(fakeEvent);
     expect(wrapper.state('orderToRemove')).toEqual(7)
  });
});

describe('removeOrder', () => {
  let wrapper;
  
  beforeEach(() => wrapper = shallow(<MarketPlace />));
  
  it('remove the set orderNumber from the orderHistory state', () => {
    let orderHistory = [{orderNumber: 4}, {orderNumber:5}];
    wrapper.setState({
      orderHistory: orderHistory,
      orderToRemove: 5,
    });
    wrapper.instance().removeOrder();
    expect(wrapper.state('orderHistory')).toEqual([{ orderNumber: 4 }])
  });
});