import express from 'express'

const app = express()
const port = process.env.PORT || 3000

app.get('/', (request, response) => {
    response.send('Hello form Express')
})

app.get('/about', (request, response) => {
    response.send('About page')
})

app.listen(port, (err) => {
    if(err) {
        return console.log('error here');
    }
    console.log(`server listening on port ${port}`);
})
