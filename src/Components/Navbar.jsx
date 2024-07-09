import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css";

function Navbar() {
  return (
    <div className='navbar'>
        <div>
            <h1>LOGO</h1>
        </div>
       <div>
       <Link className='link' to='/'>Home</Link>
       <Link className='link' to="/genImg" >Generate Image</Link>
       </div>
    </div>
  )
}

export default Navbar