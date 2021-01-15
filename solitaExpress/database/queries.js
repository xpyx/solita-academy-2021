const pool = require('./db')

// List names and amounts, order by amount, most popular first 
const getPersons = (request, response) => {
    pool.query('SELECT * FROM flyway.person ORDER BY amount DESC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

// List names in alphabetical order
const getPersonsAlphabetically = (request, response) => {
    pool.query('SELECT * FROM flyway.person ORDER BY name ASC', (error, results) => {
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

const getPersonAmountByName = (request, response) => {
    const {name} = request.params.name

    pool.query('SELECT * FROM flyway.person WHERE name = $1', [name], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
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
    getPersonsAlphabetically,
    getPersonById,
    getPersonAmountByName,
    updatePerson,
    deletePerson,
}