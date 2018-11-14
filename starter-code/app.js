const express = require('express')

const app = express()

const port = 3000

app.use(express.static("public"));

app.get('/', (req, res) => res.sendFile(__dirname + '/views/index.html'))
app.get('/about', (req, res) => res.sendFile(__dirname + '/views/about.html'))
app.get('/gallery', (req, res) => res.sendFile(__dirname  + '/views/images.html'))

app.get('*', (req, res) => res.send('404 - Page not found'))

app.listen(port, () => console.log(`Do something`))