async function cargarUsuario () {
    try {
        const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
        const usuario = await respuesta.json();

        usuario.forEach(usuario => {
            console.log("Nombre: "+usuario.name)
        })
    }

    catch (error) {
        console.error("Ocurrio un error: "+error)
    }
}

cargarUsuario();