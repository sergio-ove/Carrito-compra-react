import React from 'react'
import { Link } from 'react-router-dom'

export const CardProduct = ({ image, titulo, precio, categoria }) => {
    return (
        <>
            <img src={image} className='figure-img img-fluid rounded' />
            <p>{titulo}</p>
            <p>{precio} €</p>
            <li>
                <Link to={`/pageCategory/${categoria}`}>Más info</Link>
            </li>

        </>
    )
}
