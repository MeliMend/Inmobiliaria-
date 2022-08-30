const Push = (array, object ) => {

    try {
        array.push(object)
        alert("Propiedad Agregada")
        
    } catch (error) {
        console.log("Hubo un error,Por favor intente de nuevo", error)
    }
}

export default Push;