'use strict'

const express = require('express')
const router = express.Router()
const authController = require('../../controllers/auth.controller')

router.post('/register', authController.registerCharity)
router.post('/register/charity', authController.registerCharity)
router.post('/register/buisness', authController.registerBuisness)
router.post('/login', authController.login)

module.exports = router
