import React from 'react'
import classes from './Header.module.css'
import logo from '../../assest/images/logo.svg'
import reactLogo from '../../assest/images/react.svg'

const Header = () => {
  return (
    <header>
        <div class="container">
          <div>
            <img class={classes.logo} src={classes.logo} alt="Logo" />
          </div>
          <div class="textRight">
            <img src={classes.reactLogo} alt="React" class={classes.reactLogo}/><strong
              >React</strong
            >
          </div>
        </div>
      </header>
  )
}
export default Header;
