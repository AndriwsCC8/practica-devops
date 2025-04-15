// test.js
const fs = require('fs');

const html = fs.readFileSync('./index.html', 'utf8');

if (html.includes('Hola Mundo')) {
  console.log('✅ Prueba pasada: El HTML contiene "Hola Mundo"');
  process.exit(0);
} else {
  console.error('❌ Prueba fallida: No se encontró "Hola Mundo"');
  process.exit(1);
}
