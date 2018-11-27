'use strict'

const express = require('express')
const router = express.Router()
const authRouter = require('./auth.route')
const userRouter = require('./user.route')
const documentRouter = require('./document.route')

router.use('/auth', authRouter)
router.use('/user', userRouter)
router.use('/document', documentRouter)

module.exports = router
