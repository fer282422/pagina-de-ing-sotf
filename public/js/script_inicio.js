document.addEventListener("DOMContentLoaded", function () {
    // Obtener las aves registradas del localStorage
    const avesRegistradas = JSON.parse(localStorage.getItem("aves")) || [];

    // Seleccionar el contenedor de las tarjetas
    const cardsGrid = document.querySelector(".recent-sightings .cards-grid");

    // Limpiar el contenedor
    cardsGrid.innerHTML = "";

    if (avesRegistradas.length === 0) {
        cardsGrid.innerHTML = "<p>No hay aves registradas aún.</p>";
        return;
    }

    // Mostrar solo las últimas 5 aves registradas
    const ultimasAves = avesRegistradas.slice(-5).reverse(); // Tomamos las últimas 5 y las invertimos

    ultimasAves.forEach(ave => {
        const card = document.createElement("div");
        card.classList.add("card");

        // Crear el contenido de la tarjeta
        card.innerHTML = `
            <img src="${ave.foto}" alt="${ave.nombreAve}" class="card-image">
            <div class="card-content">
                <h3 class="card-title">${ave.nombreAve}</h3>
                <p><strong>Nombre científico:</strong> ${ave.nombreCientifico}</p>
                <p><strong>Ubicación:</strong> ${ave.ubicacion}</p>
                <p><strong>Fecha:</strong> ${ave.fecha}</p>
                <p><strong>Hábitat:</strong> ${ave.habitat}</p>
            </div>
        `;

        // Agregar la tarjeta al contenedor
        cardsGrid.appendChild(card);
    });
});
