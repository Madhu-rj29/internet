import { createServer } from 'node:http';
//const { createServer} = require('node:http')
const hostname = '127.0.0.1';
const port = 3000;
const server = createServer((req, res) => {
    console.log('received request...', req.url, req.method);

    if (req.url == '/') {
        if (req.method == 'GET') {
            res.statuscode = 200;
            res.setHeader('content-type', 'text/plan');
            res.setHeader('Access-control-allow-origin', "*");

            res.end("mithilesh");
            // console.log(res)
        }
        if (req.method == 'option') {
            res.setHeader('content-type', 'appliction/json');
            res.setHeader('Access-control-allow-orgin', 'http://127.0.0.1:5500');
            res.setHeader('Acess-control-allow-method', "POST , GET , OPTIONS");
            res.setHeader('Access-control-allow-headers', '*');
        }
        if (req.method == 'POST') {
            console.log('post method...')
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            res.setHeader('Access-Control-Allow-Origin', "*");

            res.end(JSON.stringify({ surname: "Srinivas" }));
        }
    }
})
server.listen(port, hostname, () => {
    console.log('Server running at http://$(hostname):$(port)/');
})