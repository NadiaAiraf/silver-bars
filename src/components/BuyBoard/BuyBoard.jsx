import React from 'react';
import PropTypes from 'prop-types';

const BuyBoard = ({ buyOrders }) => {
  const displayOrders = buyOrders.map( order => (
      <li className="buy-order">
        { order }
      </li>
    )
  );
  
  return (
    <div className="buy-board-container">
      <h4>buy board</h4>
      <ul>
        { displayOrders }
      </ul>
      
    </div>
  )
}

BuyBoard.propTypes = { buyOrders: PropTypes.array.isRequired }

export default BuyBoard;