const { exec } = require('child_process');

exec('node -v', (error, stdout, stderr) => {
    if (error) {
        console.error('Node.js no está instalado. Por favor, instálalo para continuar.');
    } else {
        console.log(`Node.js está instalado. Versión: ${stdout}`);
    }
});
