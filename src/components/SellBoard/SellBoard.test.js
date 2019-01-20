import React from 'react';
import { shallow } from 'enzyme';
import SellBoard from './SellBoard';

describe('SellBoard', () => {
  let wrapper;
  
  beforeEach(() => wrapper = shallow(<SellBoard />));
  
  it('renders a div', () => {
    expect(wrapper.find('div').length).toEqual(1)
  })
})