import React from 'react';
import { shallow } from 'enzyme';
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
    expect(wrapper.containsMatchingElement(<BuyBoard />)).toEqual(true)
  })
  
  it('should render a SellBoard component', () => {
    expect(wrapper.containsMatchingElement(<SellBoard />)).toEqual(true)
  })
  
  it('should render a OrderForm component', () => {
    expect(wrapper.containsMatchingElement(<OrderForm />)).toEqual(true)
  })
})