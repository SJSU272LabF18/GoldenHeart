'use strict'

const express = require('express')
const router = express.Router()
const authRouter = require('./auth.route')
const userRouter = require('./user.route')
const documentRouter = require('./document.route')
const searchRouter = require('./search.route')
const charityRouter = require('./charity.route')

router.use('/auth', authRouter)
router.use('/user', userRouter)
router.use('/document', documentRouter)
router.use('/search', searchRouter)
router.use('/charity', charityRouter)

module.exports = router
