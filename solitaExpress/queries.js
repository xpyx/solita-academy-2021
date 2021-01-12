const path = require('path')
require('dotenv').config()

const Pool = require('pg').Pool
const pool = new Pool({
    user: process.env.POSTGRES_USER,
    host: 'postgres',
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
    port: process.env.POSTGRES_PORT,
})

const getPersons = (request, response) => {
    pool.query('SELECT * FROM flyway.person ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getPersonById = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('SELECT * FROM flyway.person WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const createPerson = (request, response) => {
    const {name, amount} = request.body

    pool.query('INSERT INTO flyway.person (name, amount) VALUES ($1, $2)', [name, amount], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(`person added with ID: ${result.insertId}`)
    })
}

const updatePerson = (request, response) => {
    const id = parseInt(request.params.id)
    const {name, amount} = request.body

    pool.query(
        'UPDATE flyway.person SET name = $1, amount = $2 WHERE id = $3',
        [name, email, id],
        (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).send(`person modified with ID: ${id}`)
        }
    )
}

const deletePerson = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('DELETE FROM flyway.person WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`person deleted with ID: ${id}`)
    })
}

module.exports = {
    getPersons,
    getPersonById,
    createPerson,
    updatePerson,
    deletePerson,
}