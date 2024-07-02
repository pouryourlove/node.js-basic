import http from 'http'

const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.writeHead(200, "OK",{"Content-Type" : "text/html"})
        res.end("<a href= '/contact'>contact page</a>")
    } else if (req.url === '/about'){
        res.writeHead(200, "OK",{"Content-Type" : "text/html"})
        res.end("<h2>About section</h2>")
    } else if (req.url === '/contact'){
        res.writeHead(200, "OK",{"Content-Type" : "text/html"})
        res.end("<h3>Contact</h3>");
    } else {
        res.writeHead(404, "BAD",{"Content-Type" : "text/html"})
        res.end("<h1>404 page not found</h1>")
    }
})



server.listen(8000,() => console.log("server up!"))