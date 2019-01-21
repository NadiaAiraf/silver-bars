import React from 'react';

const RemoveOrder = ({ removeOrder, removeOrderChange }) => {
  return (
    <div className='remove-order-container'>
      <h4>Remove Order Number: </h4>
      <input className='remove-order' type='number' onChange={removeOrderChange} />
      <input type="submit" value ="submit" className="remove-order-button" onClick={removeOrder}/>
    </div>
  )
}

export default RemoveOrder