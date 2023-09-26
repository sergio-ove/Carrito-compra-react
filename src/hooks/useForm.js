import { useState } from "react"


export const useForm = () => {

    const [palabra, setPalabra] = useState()

    const serializarFormulario = (formulario) => {
        
        const formData = new FormData(formulario)

        const objetoCompleto = {}

        for (let [name, value] of formData) {
            objetoCompleto[name] = value
        }

        return objetoCompleto
    }

  

    const datosFormulario = (ev) => {

        ev.preventDefault()

        const palabraFormulario = serializarFormulario(ev.target)

        setPalabra(palabraFormulario)

    }



    return {
        palabra,
        datosFormulario
    }


}
