const url = 'https://dummyjson.com/products/'

// const token = 'ENXbvUOKkmUuD55KAaHBOma05htDc24r3MyyIbu8Ys2VPTYfLvTRjyS2'

export const fetchApi = async (palabraUsuario) => {

    try {

        const fetchApi = await fetch(`${url}${palabraUsuario}`, {
            method: 'GET',
            // headers: {
            //     Authorization: token
            // },
        })

        if (fetchApi.ok) {
            const datos = await fetchApi.json()
            return {
                ok: true,
                datos
            }
        } else {
            throw new Error('Existe un error en la petición')
        }


    } catch (error) {
        return {
            ok: false,
            datos: error.message
        }

    }


}

