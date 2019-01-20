import React from 'react';
import { shallow } from 'enzyme';
import BuyBoard from './BuyBoard';

describe('BuyBoard', () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper= shallow(<BuyBoard buyOrders={[]} />)
  });
  
  it('renders a div', () => {
    expect(wrapper.find('div').length).toEqual(1)
  })
  
  it('should render the buy Orders to the DOM', () => {
    wrapper.setProps({ buyOrders: ['BUY: 3.5kg for £306','BUY: 4.5kg for £302']})
    expect(wrapper.find('.buy-board-container').text()).toEqual('buy boardBUY: 3.5kg for £306BUY: 4.5kg for £302')
  })
})
