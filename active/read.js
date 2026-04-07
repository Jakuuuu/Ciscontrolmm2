const fs = require('fs');
const pdf = require('pdf-parse');
pdf(fs.readFileSync('C:/Users/Danieljab/Pagina web cis control/Correcciones pagina web.pdf')).then(data => console.log(data.text)).catch(e => console.error(e));
