import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
    return (
        <nav className='navbar navbar-expand-lg bg-body-tertiary navPropio'>
            <ul className='nav'>
                <li className="nav-link active"><Link to='/'>Home</Link></li>
                <li className="nav-link "><Link to='/sunglasses'>Sunglasses</Link></li>
                <li className="nav-link "><Link to='/laptops'>Laptops</Link></li>
                <li className="nav-link "><Link to='/fragrances'>Fragrances</Link></li>
            </ul >
        </nav >
    )
}
