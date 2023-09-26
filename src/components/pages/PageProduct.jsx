import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { fetchApi } from '../../helpers/fetchApi';
import { useNavigate } from "react-router-dom";
import { Header } from '../layouts/Header';
import { Footer } from '../layouts/Footer';
import estrella from '../../img/estrella.png'

export const PageProduct = () => {

  const [dates, setDates] = useState("")
  const [error, setError] = useState("")
  const [verify, setVerify] = useState(false)

  const { id } = useParams()
  const navigate = useNavigate()

  const returnOfPage = () => {
    navigate(-1)
  }

  const llamada = async () => {

    const datosLlamada = await fetchApi(id)

    if (datosLlamada.ok === true) {
      setDates(datosLlamada.datos)
      setVerify(true)
    } else {
      setError(datosLlamada.datos)
    }
  }



  useEffect(() => {
    llamada()
  }, [])



  return (
    <>
      <Header />

      <main className="container my-5 mainCategorias containerCategorias">

        {
          verify ? (

            <article className='articleProduct'>

              <h1>{dates.title}</h1>

              <img src={dates.images[1]} alt={dates.title} />

              <div>

                <p>{dates.brand}</p>
                <p>{dates.description}</p>
                <p>{dates.price} €</p>
                <div className='divRating'>
                <p>{dates.rating}</p>
                <img src={estrella} alt="" />
                </div>
                
              </div>

              <button onClick={returnOfPage} className='btn btn-primary buttonReturn'>Volver</button>

            </article>

          ) : (

            <p>{error}</p>
          )

        }



      </main>

      <div>

      

      </div>

      <Footer />

    </>
  )
}
