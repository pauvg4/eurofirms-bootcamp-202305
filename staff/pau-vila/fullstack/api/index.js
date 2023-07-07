const express = require('express')
const bodyParser = require('body-parser')
const mongodb = require('mongodb')
const context = require('./logic/context')
const registerUser = require('./logic/registerUser')
const authenticateUser = require('./logic/authenticateUser')
const retrieveUser = require('./logic/retrieveUser')

const { MongoClient } = mongodb
const client = new MongoClient('mongodb://127.0.0.1:27017')

client.connect()
    .then(connection => {
        const db = connection.db('data')

        const users = db.collection('users')
        const posts = db.collection('posts')

        context.users = users
        context.posts = posts

        const api = express()

        /* `const jsonBodyParser` está creando una instancia del middleware `body-parser` con el método
        `json()`. Este middleware se usa para analizar el cuerpo de la solicitud de las solicitudes
        entrantes con cargas JSON. Permite que la API acceda a los datos JSON enviados en el cuerpo de la
        solicitud y que estén disponibles en el objeto `req.body`. */
        const jsonBodyParser = bodyParser.json()
        /* `api.get('/', (req, res)` está definiendo un controlador de ruta para la solicitud GET a la URL raíz
        ("/") de la API. Cuando se realiza una solicitud GET a la URL raíz, la devolución de llamada Se
        ejecutará la función `(req, res)` En este caso, la función de devolución de llamada simplemente
        envía la respuesta "hola mundo ;)" de vuelta al cliente. */
        api.get('/', (req, res) => {
            res.send('hola mundo ;)')
        })

        api.get('/', (req, res) => {
            const q = req.query.q

            res.send(`you requested me to search: ${q}`)
        })

        api.post('/users', jsonBodyParser, (req, res) => {
            const { name, email, password } = req.body

            try {
                registerUser(name, email, password)
                    .then(() => res.status(201).send())
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) {
                res.status(400).json({ error: error.message })
            }
        })

        api.post('/users/auth', jsonBodyParser, (req, res) => {
            const { email, password } = req.body

            try {
                authenticateUser(email, password)
                    .then(userId => res.json(userId))
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) {
                res.status(400).json({ error: error.message })
            }
        })

        api.get('/users', (req, res) => {
            try {
                const { authorization } = req.headers
                const userId = authorization.slice(7)

                retrieveUser(userId)
                    .then(user => res.json(user))
                    .catch(error => res.status(400).json({ error: error.message }))
            } catch (error) {
                res.status(400).json({ error: error.message })
            }
        })



        api.listen(9000, () => console.log('API running in port 9000'))

    })