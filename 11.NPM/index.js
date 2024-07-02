import http from 'http'

//create our server
const server = http.createServer((req, res) => {
    res.writeHead(202, "Good",{"Content-Type":"text/html"})
    res.write("<h1>Hello from node.js server</h1>");
})


server.listen(8000, () => console.log('Server up'))