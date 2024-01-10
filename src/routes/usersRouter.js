const express = require('express');
const router = express.Router();

const usersController= require('../controllers/usersController')
const userCheckLogs = require('../middlewares/usersCheckLogs')

router.get('/login', usersController.login)
router.post('/login', userCheckLogs)

module.exports = router;