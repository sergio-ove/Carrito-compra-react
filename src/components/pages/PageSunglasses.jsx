import React, { useEffect, useState } from 'react'
import { fetchApi } from '../../helpers/fetchApi'
import { Footer } from '../layouts/Footer'
import { Header } from '../layouts/Header'
import { CardCategory } from '../CardCategory'
import { useNavigate } from "react-router-dom";

export const PageSunglasses = () => {

  const [dates, setDates] = useState([])

  const navigate = useNavigate()

  const returnOfPage = () => {
    navigate(-1)
  }


  const fechDatos = async () => {
    const datesCall = await fetchApi('category/sunglasses')
    const arrayGafas = datesCall.datos.products
    setDates(arrayGafas)
  }

  useEffect(() => {
    fechDatos()
  }, [])


  return (
    <div>
      <Header />


      <h1 className='h1Categoria'>Sunglasses</h1>

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
