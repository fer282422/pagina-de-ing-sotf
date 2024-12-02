// script.js

// === Funcionalidad para "Registrar Aves" ===
const registrarAve = async () => {
    const nombreInput = document.getElementById('nombre');
    const especieInput = document.getElementById('especie');

    if (!nombreInput || !especieInput) return; // Si no estamos en la página, no hace nada.

    const form = document.getElementById('registroForm');
    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const nombre = nombreInput.value.trim();
        const especie = especieInput.value.trim();

        if (!nombre || !especie) {
            alert('Por favor, llena todos los campos.');
            return;
        }

        try {
            const response = await fetch('/api/aves', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ nombre, especie }),
            });

            if (response.ok) {
                alert('Ave registrada exitosamente');
                form.reset();
            } else {
                const error = await response.json();
                alert(error.error || 'Error al registrar ave.');
            }
        } catch (err) {
            console.error(err);
            alert('Error de conexión al servidor.');
        }
    });
};

// === Funcionalidad para "Aves Registradas" ===
const cargarAves = async () => {
    const listaAves = document.getElementById('listaAves');
    if (!listaAves) return; // Si no estamos en la página, no hace nada.

    try {
        const response = await fetch('/api/aves');
        if (response.ok) {
            const aves = await response.json();
            listaAves.innerHTML = ''; // Limpiar lista

            aves.forEach((ave) => {
                const item = document.createElement('li');
                item.textContent = `Nombre: ${ave.nombre}, Especie: ${ave.especie}`;
                listaAves.appendChild(item);
            });
        } else {
            alert('Error al cargar aves registradas.');
        }
    } catch (err) {
        console.error(err);
        alert('Error de conexión al servidor.');
    }
};

// === Inicializar Funciones según la Página ===
document.addEventListener('DOMContentLoaded', () => {
    registrarAve();
    cargarAves();
});
