
const http = require('http')
const port = process.env.PORT || 3000

const requestHandler = (request, response) => {
    // console.log('request -->', request)
    // console.log('response -->', response)
    console.log(request.url, request.method);

    switch (request.method) {
        case 'POST':
            if(request.url === '/') {
                return response.end('What')
            }
            return response.end('Hello Node.js Server for POST request!')
        default:
            break;
    }
    response.end('Hello')
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }

    console.log(`server is listening on ${port}`)
})