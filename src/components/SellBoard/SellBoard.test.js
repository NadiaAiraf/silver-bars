import React from 'react';
import { shallow } from 'enzyme';
import SellBoard from './SellBoard';

describe('SellBoard', () => {
  let wrapper;
  
  beforeEach(() => wrapper = shallow(<SellBoard sellOrders={[]} />));
  
  it('renders a div', () => {
    expect(wrapper.find('div').length).toEqual(1)
  })
  
  it('should render the sell orders passed into it', () => {
    wrapper.setProps({ sellOrders: ['SELL: 1.1kg for £209', 'SELL 1.0kg  for £201']})
    expect(wrapper.find('.sell-board-container').text()).toEqual('sell boardSELL: 1.1kg for £209SELL 1.0kg  for £201')
  })
})