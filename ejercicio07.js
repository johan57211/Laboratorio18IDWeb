const btn = document.getElementById("btnUsuario");
const info = document.getElementById("informacion");

btn.addEventListener("click", () => {
    fetch("https://jsonplaceholder.typicode.com/users/2")
    .then (respuesta => respuesta.json())
    .then(usuario => {
        info.innerHTML = `
            <p><strong>Nombre:</strong> ${usuario.name}</p>
            <p><strong>Email:</strong> ${usuario.email}</p>
            <p><strong>Ciudad:</strong> ${usuario.address.city}</p>
        `;
    })
    .catch (error => {
        console.error("Ocurrio un error: "+error)
    })
})