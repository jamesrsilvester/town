import React, { Component } from 'react'
import {Link} from 'react-router'

class Header extends Component{
  render(){
    return (
      <nav>
        <div className="nav-wrapper grey2">
          <img href="#!" className="brand-logo" alt="Logo" src=""></img>
          <ul className="nav-mobile right">
            <li><Link to={'/feed'}>Feed</Link></li>
            <li><Link to={'/splash'}>Splash</Link></li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Header
