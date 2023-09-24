import React from 'react'
import logo from "../images/nikee.png"


export const Navbar = () => {
    return (
        <div className='nav'>
            <img src={logo} className='nike-logo' />
            <ul>
                <li>MENU</li>
                <li>LOCATION</li>
                <li>ABOUT</li>
                <li>CONTACT</li>
            </ul>
            <button className='login-btn'>Login</button>

        </div>
    )
}
