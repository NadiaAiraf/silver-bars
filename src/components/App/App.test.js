import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import MarketPlace from '../MarketPlace/MarketPlace';

describe('App', () => {
  let wrapper;
  
  beforeEach(() => wrapper = shallow(<App />));
  
  it('should render a div', () => {
    expect(wrapper.find('div').length).toEqual(1);
  })
  
  it('should render a marketplace component', () => {
    expect(wrapper.containsMatchingElement(<MarketPlace />)).toEqual(true);
  })
})
