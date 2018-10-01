const http = require('http')

http.createServer( (req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    // res.write('Hola Mundo')
    let salida = {
        nombre: 'Roberto',
        edad: 26,
        url: req.url
    }
    res.write( JSON.stringify(salida) )
    res.end()
} ).listen(8080)

console.log('Escuchando el puerto 8080')