fetch("http://localhost:5000/api/paciente")
  .then((res) => res.json())
  .then((pacientes) => {
    const lista = document.getElementById("lista-pacientes");
    pacientes.forEach((p) => {
      const item = document.createElement("li");
      item.textContent = `ID: ${p.pacienteId} - Nombre: ${p.nombres} ${p.apellidos} - DNI: ${p.dni}`;
      if (p.esUsuario) item.textContent += " - Titular";
      lista.appendChild(item);
      lista.appendChild(document.createElement("hr"));
    });
  })
  .catch((err) => console.error("Error al obtener pacientes:", err));
