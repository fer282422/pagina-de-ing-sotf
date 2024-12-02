document.getElementById("registroAveForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Obtener los valores del formulario
    const nombreAve = document.getElementById("nombreAve").value;
    const nombreCientifico = document.getElementById("nombreCientifico").value;
    const ubicacion = document.getElementById("ubicacion").value;
    const fecha = document.getElementById("fecha").value;
    const habitat = document.getElementById("habitat").value;
    const descripcion = document.getElementById("descripcion").value;
    const foto = document.getElementById("foto").files[0]; // Obtenemos la imagen seleccionada

    // Convertir la imagen a base64
    let fotoBase64 = "";
    if (foto) {
        const reader = new FileReader();
        reader.onloadend = function() {
            fotoBase64 = reader.result;

            // Crear el objeto ave
            const ave = {
                nombreAve,
                nombreCientifico,
                ubicacion,
                fecha,
                habitat,
                descripcion,
                foto: fotoBase64,  // Guardamos la imagen en base64
            };

            // Obtener las aves registradas del localStorage
            let avesRegistradas = JSON.parse(localStorage.getItem("aves")) || [];

            // Agregar la nueva ave al arreglo
            avesRegistradas.push(ave);

            // Guardar nuevamente en el localStorage
            localStorage.setItem("aves", JSON.stringify(avesRegistradas));

            // Limpiar el formulario
            document.getElementById("registroAveForm").reset();

            // Mostrar mensaje de confirmación
            mostrarConfirmacion();
        };
        reader.readAsDataURL(foto);  // Leemos la imagen como base64
    }
});

// Función para mostrar el mensaje de confirmación
function mostrarConfirmacion() {
    const mensaje = document.createElement('div');
    mensaje.classList.add('confirmacion');
    mensaje.innerText = '¡Ave registrada con éxito!';

    // Mostrar el mensaje
    document.body.appendChild(mensaje);

    // Después de 3 segundos, ocultar el mensaje
    setTimeout(() => {
        mensaje.remove();
    }, 3000);
}
