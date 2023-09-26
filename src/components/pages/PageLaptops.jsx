import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { fetchApi } from '../../helpers/fetchApi';
import { CardCategory } from '../CardCategory';
import { Header } from '../layouts/Header';
import { Footer } from '../layouts/Footer';


export const PageLaptops = () => {
    const [dates, setDates] = useState([])

    const navigate = useNavigate()

    const returnOfPage = () => {
        navigate(-1)
    }


    const fechDatos = async () => {
        const datesCall = await fetchApi('category/laptops')
        const arrayGafas = datesCall.datos.products
        setDates(arrayGafas)
    }

    useEffect(() => {
        fechDatos()
    }, [])


    return (
        <div>
            <Header />


            <h1 className='h1Categoria'>Laptops</h1>

            <main className="container-fluid div-img">


                {dates.length > 0 && dates.map((element) => (

                    <section key={element.id} >

                        <CardCategory imagen={element.images[1]} titulo={element.brand} descripcion={element.description} precio={element.price} stock={element.stock} idElemento={element.id} />

                    </section>

                ))}


            </main>

            <button onClick={returnOfPage} className='btn btn-primary buttonReturn'>Volver</button>
            <Footer />
        </div>
    )
}
