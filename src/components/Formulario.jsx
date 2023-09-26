import { useContext, useEffect } from 'react'
import { useForm } from '../hooks/useForm'
import { UserContext } from '../context/UserContext'


export const Formulario = () => {

    const { datosFormulario, palabra } = useForm()

    const { user, setUser } = useContext(UserContext)


    const probar = () => {
        if (palabra != undefined) {
            setUser(palabra)
        } else
            return
    }


    useEffect(() => {
        probar()
    }, [datosFormulario])

    return (
        <div>

            <main className="container my-5">

                <form onSubmit={datosFormulario} className="row g-3">

                    <input type="text" className="form-control" placeholder='Introduce Categoría' name='categoria' />

                    <button type="submit" className="btn btn-primary mb-3">Buscar</button>

                </form>

            </main>

        </div>
    )
}
