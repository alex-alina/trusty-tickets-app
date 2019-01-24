import React, { PureComponent } from 'react'
import MenuButtons from '../menus/MenuButtons';
import './NavBarContainer.css'

export default class NavBarContainer extends PureComponent {

  render() {
    return (
      <nav className="nav-bar"> 
        <ul className="nav-items"> 
          <li className="app-name"><h2>Trusty Tickets</h2></li>
          <li className="account-access"><MenuButtons /></li>
        </ul>
      </nav>
    )
  }
}


