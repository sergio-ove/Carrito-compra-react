import { useContext, useEffect, useState } from 'react'
import { fetchApi } from '../../helpers/fetchApi'
import { Formulario } from '../Formulario'
import { UserContext } from '../../context/UserContext'
import { CardProduct } from '../CardProduct'
import { NavBar } from '../layouts/NavBar'
import { Header } from '../layouts/Header'
import { Footer } from '../layouts/Footer'


export const Buscador = () => {

    const { user } = useContext(UserContext)
    const [palabra, setPalabra] = useState("")

    const fetchData = async () => {

        if (user === '') {
            return;
        } else {
            const resultado = await fetchApi(`search?q=${user.categoria}`);
            const arrayProductos = resultado.datos.products
            console.log(resultado);
            setPalabra(arrayProductos)
        }

    };



    useEffect(() => {
        fetchData()
    }, [user])



    return (
        <div >

            <Header />

            <Formulario />

            <main className='container-fluid div-img' >

                {palabra.length > 0 && palabra.map((element) => (

                    <section key={element.id}  >

                        <CardProduct image={element.images[0]} titulo={element.title} precio={element.price} idproducto={element.id} categoria={element.category} />

                    </section>

                ))}

            </main>

            <Footer />

        </div>
    )
}
