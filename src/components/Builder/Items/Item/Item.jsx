import React from 'react';
import classes from './Item.module.css';

const Item 
 = () => {
  return (
    <div>
        <li className={classes.item}>
                    <span>Vanilla</span>
                    <span class={classes.quantity}>2</span>
                    <div class="right">
                      <button type="button" className={[classes.plus,'rounded'].join(' ')}>
                        +
                        </button>
                      <button type="button" className={[classes.minus,'rounded'].join('')}>
                        -
                        </button>
                    </div>
                  </li>
    </div>
  )
}

export default Item;
