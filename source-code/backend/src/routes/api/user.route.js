'use strict'

const express = require('express')
const router = express.Router()
const userController = require('../../controllers/user.controller')
const auth = require('../../middlewares/authorization')

router.get('/detail/:userid', auth(), userController.detail)
router.post('/update', auth(), userController.update)

module.exports = router
