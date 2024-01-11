// console.log("Hello world")

const login = document.querySelector('#login')

const http = require('http')

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('Hello World')
})

server.listen(port, hostname, () => {
    console.log('Server is on fire')
})

switch(req.url) {
    case "/":
        res.write("This is working")
        break;
    case "/login":
        res.write(login)
        break; 
}