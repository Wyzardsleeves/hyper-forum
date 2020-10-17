import React from 'react'
import {NavLink} from 'react-router-dom'
import logo from '../assets/images/hyp3r.png'

function NavBar(){
  return(
    <section className="container">
      <div>
        <NavLink to="/board">
          <img src={logo} alt="hyp3r.png" style={{height: '70px'}} />
        </NavLink>
        <ul className="right blue-text text-darken-2">
          <li><a href="#">Link_1</a></li>
          <li><a href="#">Link_2</a></li>
          <li><NavLink to="/about">About</NavLink></li>
        </ul>
      </div>
    </section>
  )
}

export default NavBar
