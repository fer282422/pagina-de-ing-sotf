const express = require('express');
const app = express();
const port = 3000;

// Middleware para parsear el cuerpo de las peticiones
app.use(express.json());

// Servir archivos estáticos desde la carpeta "public"
app.use(express.static('public'));

// Mock de base de datos
let aves = [];

// Ruta para obtener todas las aves
app.get('/api/aves', (req, res) => {
    res.json(aves);
});

// Ruta para registrar una nueva ave
app.post('/api/aves', (req, res) => {
    const { nombre, especie } = req.body;
    if (!nombre || !especie) {
        return res.status(400).json({ error: 'El nombre y la especie son requeridos.' });
    }
    const nuevaAve = { nombre, especie };
    aves.push(nuevaAve);
    res.status(201).json(nuevaAve);
});

// Iniciar servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
