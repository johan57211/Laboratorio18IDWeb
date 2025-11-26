function cargarUsuario () {
    fetch ("https://jsonplaceholder.typicode.com/users")
        .then(respuesta => respuesta.json())
        .then(usuarios => {
            usuarios.forEach(usuario => {
                console.log("Nombre: ", usuario.name)
            })
        })
        .catch(error => {
            console.log("Ocurrio un error: "+error)
        })
}

cargarUsuario();