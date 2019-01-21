import React from 'react';
import { shallow } from 'enzyme';
import OrderForm from './OrderForm';

describe('OrderForm', () => {
  let wrapper;
  
  beforeEach(() => wrapper = shallow(<OrderForm formChange={jest.fn()} formSubmit={jest.fn()} />))
  
  it('renders a div contain', () => {
    expect(wrapper.find('div').length).toEqual(1);
  })
  
  it('renders 6 input tags', () => {
    expect(wrapper.find('input').length).toEqual(6);
  })
})