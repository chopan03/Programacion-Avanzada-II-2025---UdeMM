fetch("http://localhost:5000/api/usuario")
  .then((res) => res.json())
  .then((usuarios) => {
    const usuario = usuarios[0];
    document.getElementById(
      "usuario-id"
    ).innerText = `ID: ${usuario.usuarioId}`;
    document.getElementById(
      "usuario-email"
    ).innerText = `email: ${usuario.email}`;
  })
  .catch((err) => console.error("Error al obtener usuario:", err));
