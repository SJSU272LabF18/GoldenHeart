'use strict'

const express = require('express')
const router = express.Router()
const charityController = require('../../controllers/charity.controller')

router.post('/payment', charityController.payment)

module.exports = router
