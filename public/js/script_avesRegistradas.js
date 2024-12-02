document.addEventListener("DOMContentLoaded", function () {
    // Obtener las aves registradas de localStorage
    const avesRegistradas = JSON.parse(localStorage.getItem("aves")) || [];

    // Seleccionar el contenedor de las tarjetas y el filtro de hábitat
    const cardsGrid = document.querySelector(".cards-grid");
    const filtroHabitat = document.getElementById("filtroHabitat");

    // Limpiar el contenedor
    cardsGrid.innerHTML = "";

    // Función para mostrar las aves
    function mostrarAves(aves) {
        // Limpiar el contenedor antes de agregar las nuevas tarjetas
        cardsGrid.innerHTML = "";

        if (aves.length === 0) {
            cardsGrid.innerHTML = "<p>No hay aves registradas aún.</p>";
            return;
        }

        aves.forEach(ave => {
            const card = document.createElement("div");
            card.classList.add("card");

            // Crear el contenido de la tarjeta
            card.innerHTML = `
                <img src="${ave.foto}" alt="${ave.nombreAve}" class="card-image">
                <div class="card-content">
                    <h3 class="card-title">${ave.nombreAve}</h3>
                    <p><strong>Nombre científico:</strong> ${ave.nombreCientifico}</p>
                    <p><strong>Ubicación:</strong> ${ave.ubicacion}</p>
                    <p><strong>Hábitat:</strong> ${ave.habitat}</p>
                    <p><strong>Fecha:</strong> ${ave.fecha}</p>
                    <p><strong>Descripción:</strong> ${ave.descripcion}</p>
                </div>
            `;

            // Agregar la tarjeta al contenedor
            cardsGrid.appendChild(card);
        });
    }

    // Mostrar todas las aves por defecto
    mostrarAves(avesRegistradas);

    // Filtrar aves por hábitat
    filtroHabitat.addEventListener("change", function () {
        const habitatSeleccionado = filtroHabitat.value;
        const avesFiltradas = avesRegistradas.filter(ave => 
            habitatSeleccionado ? ave.habitat === habitatSeleccionado : true
        );
        mostrarAves(avesFiltradas);
    });
});
