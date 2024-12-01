document.getElementById('uploadForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = new FormData(document.getElementById('uploadForm'));
    const file = document.getElementById('imageUpload').files[0];

    // Crear un objeto FormData para enviar la imagen a la API
    formData.append('image', file);

    // Llamada a la API para procesar la imagen y obtener los datos del ave
    fetch('https://api.openai.com/v1/images/generations', {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer YOUR_API_KEY', // Sustituye con tu clave de API de OpenAI
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            prompt: "Genera el nombre, hábitat y descripción de un ave basada en la imagen proporcionada.",
            n: 1,
            size: "1024x1024"
        })
    })
    .then(response => response.json())
    .then(data => {
        const birdInfo = data.choices[0].text; // Suponiendo que la respuesta contenga la información del ave

        // Mostrar los resultados en la interfaz
        const resultContainer = document.getElementById('resultContainer');
        resultContainer.innerHTML = `
            <div class="result">
                <img src="${file}" alt="Imagen del ave" style="width: 100%; max-width: 400px; height: auto;">
                <h2>${birdInfo.name}</h2>
                <p><strong>Hábitat:</strong> ${birdInfo.habitat}</p>
                <p><strong>Descripción:</strong> ${birdInfo.description}</p>
            </div>
        `;
    })
    .catch(error => console.error('Error al procesar la imagen:', error));
});
