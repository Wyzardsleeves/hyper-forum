import React from 'react'
import {NavLink, Link} from 'react-router-dom'
import logo from '../assets/images/hyp3r.png'

function NavBar(){
  return(
    <section className="container">
      <div>
        <NavLink to="/topics/">
          <img src={logo} alt="hyp3r.png" style={{height: '70px'}} />
        </NavLink>
        <ul className="right blue-text text-darken-2">
          <li><Link to="https://github.com/Wyzardsleeves/hyper-forum">Github</Link></li>
          <li><NavLink to="/about">About</NavLink></li>
        </ul>
      </div>
    </section>
  )
}

export default NavBar
