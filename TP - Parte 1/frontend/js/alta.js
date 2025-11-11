// Cargar obras sociales en el select
fetch("http://localhost:5000/api/obrasocial")
  .then((res) => res.json())
  .then((data) => {
    const select = document.getElementById("obra-social-select");
    data.forEach((os) => {
      const option = document.createElement("option");
      option.value = os.obraSocialId;
      option.textContent = os.nombre;
      select.appendChild(option);
    });
  })
  .catch((err) => console.error("Error al cargar obras sociales:", err));

// Enviar el formulario
document.getElementById("form-alta").addEventListener("submit", (e) => {
  e.preventDefault();
  const form = e.target;
  const datos = {
    Apellidos: form.Apellidos.value,
    Nombres: form.Nombres.value,
    DNI: form.DNI.value,
    FechaDeNacimiento: form.FechaDeNacimiento.value,
    Sexo: form.Sexo.value,
    ObraSocialId: form.ObraSocialId.value,
    Credencial: form.Credencial.value,
  };

  fetch("http://localhost:5000/api/paciente", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(datos),
  })
    .then(async (res) => {
      const msg = await res.text();
      document.getElementById("resultado").textContent = res.ok
        ? "✅ Paciente creado con éxito"
        : `❌ Error: ${msg}`;
    })
    .catch((err) => {
      console.error("Error en el envío:", err);
      document.getElementById("resultado").textContent = "❌ Error inesperado";
    });
});
