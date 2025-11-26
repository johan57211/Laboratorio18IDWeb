const cargarUsuario = () => {
    fetch("https://jsonplaceholder.typicode.com/users/10")

        .then(respuesta => respuesta.json())
        .then(usuario => {
            console.log("Nombre: " + usuario.name);
            console.log("Usuario: " + usuario.username);
            console.log("Email: " + usuario.email);
        })

        .catch (error => {
            console.error("Hubo un error: "+error);
        })
}

cargarUsuario();