const añadirUser = async (url, object = {}) => {

    try {
       
        await axios.post(url, object)

        
        alert("Usuario creado correctamente")
    } catch (error) {
        alert("Hubo un error intente de nuevo", error)
    }


}

export default añadirUser;