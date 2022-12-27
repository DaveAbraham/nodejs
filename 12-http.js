/* http module will allow us to set a web server , for that we will use an
* abstraction on the top of http module, and that is going to be the package by the name of
* express module
* Server keeps on listening requests */

const http = require('http');
const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('Welcom to out home page')

    }
    if(req.url==='/about'){
        res.end('Here is our short history')
    }
    res.end(
        `<h1>Oops!</h1>
    <p>
        We can't seem to find the page you are looking for
    </p>
    <a href="/">back to home</a>`
    )

})

server.listen(5000);
