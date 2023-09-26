import React from 'react'
import { Link } from 'react-router-dom'

export const CardCategory = ({ imagen, titulo, precio, stock, idElemento }) => {
    return (
        
        <>
            <img src={imagen} alt="imagen producto" />

            <p className='pTitulo'>{titulo}</p>

            <p>{precio} €</p>

            <li className='masInfo'>
               
                <Link to={`/pageProduct/${idElemento}`}>Más info</Link>

            </li>

        </>
    )
}
