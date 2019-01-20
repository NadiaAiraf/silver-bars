import React from 'react';
import { shallow } from 'enzyme';
import OrderForm from './OrderForm';

describe('OrderForm', () => {
  let wrapper;
  
  beforeEach(() => wrapper = shallow(<OrderForm />));
  
  it('renders a div contain', () => {
    expect(wrapper.find('div').length).toEqual(1)
  })
})