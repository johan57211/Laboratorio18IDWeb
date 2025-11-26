const btn = document.getElementById("btnUsuario");
const info = document.getElementById("informacion");

async function cargarUsuario() {
    try {
        const respuesta = await fetch("https://jsonplaceholder.typicode.com/users/2");

        const usuario = await respuesta.json();

        info.innerHTML = `
            <p><strong>Nombre:</strong> ${usuario.name}</p>
            <p><strong>Email:</strong> ${usuario.email}</p>
            <p><strong>Ciudad:</strong> ${usuario.address.city}</p>
        `;
    } catch (error) {
        console.error("Hubo un error:", error);
    }
}

btn.addEventListener("click", cargarUsuario);
