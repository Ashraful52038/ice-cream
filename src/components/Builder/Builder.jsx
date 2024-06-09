import React from 'react';
import classes from './Builder.module.css';
import Items from './Items/Items';
import TotalPrice from './TotalPrice/TotalPrice';
import Modal from './Modal/Modal';

const Builder = () => {
  return (
    <div>
    <div className={classes.Builder}>
      <h3>Build your own ice cream</h3>
      <Items/>
      <TotalPrice/>
              <button type="button" className={[classes.order,'rounded'].join(' ')}>
                Add to Cart
              </button>
              </div>
              <Modal>Hello Modal</Modal>
    </div>
  )
}

export default Builder;
