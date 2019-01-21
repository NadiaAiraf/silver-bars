import React from 'react';
import { shallow } from 'enzyme';
import RemoveOrder from './RemoveOrder';

describe('RemoveOrder', () => {
  let wrapper;
  
  beforeEach(() => wrapper = shallow(<RemoveOrder />));
  
  it('renders a div container', () => {
    expect(wrapper.find('div').length).toEqual(1);
  })
  
  it('renders 2 input tags', () => {
    expect(wrapper.find('input').length).toEqual(2);
  })
})