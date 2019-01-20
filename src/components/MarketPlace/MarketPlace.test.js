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
    expect(wrapper.containsMatchingElement(<OrderForm />)).toEqual(true)
  })
})

describe('Mounted MarketPlace', () => {
  let wrapper;
  
  beforeEach(() => wrapper = mount(<MarketPlace />))
  
  it('calls formSubmit when an order form is submitted', () => {
    const orderSpy = jest.spyOn(wrapper.instance(), 'formSubmit')
    wrapper.instance().forceUpdate();
    wrapper.find('.submit-button').first().simulate('click')
    expect(orderSpy).toHaveBeenCalledTimes(1);
  })
})