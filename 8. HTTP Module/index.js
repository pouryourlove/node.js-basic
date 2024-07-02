import http from 'http'

//create our server
const server = http.createServer((req, res) => {
    //To show which kind of data we are showing to the user
    // res.setHeader("Content-Type", "text/html");
    // res.statusCode = 404
    // res.statusMessage = "BAD"
    // shorthand for status (code, message, header)
    res.writeHead(202, "Good",{"Content-Type":"text/html"})
    res.write("<h1>Hello from node.js server</h1>");
})



//Listening on port 8000
server.listen(8000, () => console.log('Server up'))