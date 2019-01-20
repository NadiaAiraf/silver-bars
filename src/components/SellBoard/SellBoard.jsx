import React from 'react';
import PropTypes from 'prop-types';

const SellBoard = ({sellOrders}) => {
  const displayOrders = sellOrders.map( order => (
      <li className="sell-order">
        { order }
      </li>
    )
  );
  
  return ( 
    <div className="sell-board-container">
      <h4>sell board</h4>
      <ul>
        {displayOrders}
      </ul>
      
    </div>
  )
}

SellBoard.propTypes = { sellOrders: PropTypes.array.isRequired };

export default SellBoard;