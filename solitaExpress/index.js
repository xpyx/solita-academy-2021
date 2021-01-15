const express = require('express')
const bodyParser = require('body-parser')
const db = require('./database/queries')

const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.get('/', (request, response) => {
    response.json({info: 'Node.js, Express, and Postgres API'})
})

app.get('/person', db.getPersons) // List names and amounts, order by amount, most popular first
app.get('/person/name', db.getPersonsAlphabetically) // List names in alphabetical order
app.post('/person/:name', db.getPersonAmountByName) // 
app.put('/person/:id', db.updatePerson)
app.delete('/person/:id', db.deletePerson)

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})