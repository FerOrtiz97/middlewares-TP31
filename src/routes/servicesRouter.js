const express = require('express')
const router = express.Router()
const { services, design } = require('../controllers/servicesControllers')

router.get('/', services)
router.get('/design', design);

module.exports = router