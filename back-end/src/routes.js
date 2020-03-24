const express = require('express')


const OngControler = require('./controllers/OngController')
const IncidentController = require('./controllers/incidentCotroller')
const ProfileController = require('./controllers/ProfileControler')
const SessionController = require('./controllers/SessionsController')


const routes = express.Router()

routes.post('/sessions',SessionController.create)

routes.get('/ongs', OngControler.index)
routes.post('/ongs', OngControler.create)

routes.get('/profile',ProfileController.index)


routes.get('/incidents',IncidentController.index)
routes.post('/incidents',IncidentController.create)
routes.delete('/incidents/:id',IncidentController.delete)
module.exports = routes
