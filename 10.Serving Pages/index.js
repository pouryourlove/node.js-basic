//how to serve about and home html on here ?
import http from 'http';
import fs from "fs";

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.writeHead(200, "OK", {"Content-Type" : "text/html"})
        fs.readFile("./public/home.html", (error, data) => {
            if(error) throw error;
            res.end(data)
        })
    }else if(req.url === '/about'){
        res.writeHead(200, "OK", {"Content-Type" : "text/html"})
        fs.readFile("./public/about.html", (error, data) => {
            if(error) throw error;
            res.end(data)
        })
    }else {
        res.writeHead(400, "BAD", {"Content-Type" : "text/html"});
        res.end("<h3>404 page not found</h3>")

    }
})

server.listen(8000, () => console.log('server up!'))