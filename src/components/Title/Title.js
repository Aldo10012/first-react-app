// src/Title.js
import './Title.css';
import { NavLink } from 'react-router-dom'

function Title() {
    return (
      <div className="Title">
        <h1>SFPOPOS</h1>
			  <div className="Title-Subtitle">San Franciscos Privately Owned Public Spaces</div>
        <div>
          <NavLink className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" } to="/">
            List
          </NavLink>
          <NavLink className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }to="/about">
            About
          </NavLink>
        </div>
    </div>
    )
  }
  
  export default Title