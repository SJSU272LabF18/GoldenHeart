'use strict'

const express = require('express')
const router = express.Router()
const authController = require('../../controllers/auth.controller')

router.post('/register', authController.register)
router.post('/register/charity', authController.registerCharity)
router.post('/login', authController.login)

module.exports = router
