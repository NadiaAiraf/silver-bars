import React from 'react';
import { shallow } from 'enzyme';
import BuyBoard from './BuyBoard';

describe('BuyBoard', () => {
  let wrapper;
  
  beforeEach(() => wrapper = shallow(<BuyBoard />));
  
  it('renders a div', () => {
    expect(wrapper.find('div').length).toEqual(1)
  })
})