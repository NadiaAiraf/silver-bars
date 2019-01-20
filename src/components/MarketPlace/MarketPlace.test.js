import React from 'react';
import { shallow } from 'enzyme';
import MarketPlace from './MarketPlace';

describe('MarketPlace', () => {
  let wrapper;
  
  beforeEach(() => wrapper = shallow(<MarketPlace />));
  
  it('renders a div', () => {
    expect(wrapper.find('div').length).toEqual(1)
  })
})