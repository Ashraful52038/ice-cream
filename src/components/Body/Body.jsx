import React from 'react'
import classes from './Body.module.css';
import IceCreamBuilder from '../../containers/IceCreamBuilder/IceCreamBuilder';

const Body = () => {
  return (
    <div className={classes.mainBody}>
        <IceCreamBuilder/>
    </div>
  )
}

export default Body;
