const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.port || 3000

const app = express()
app.set('view engine','hbs')

app.use(express.static('public'))

app.use(bodyParser.text())
// app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(port, () => {
    console.log(`App is listening on ${port}`)
})