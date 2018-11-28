'use strict'

const User = require('../models/user.model')
const Charity = require('../models/charity.model')
const jwt = require('jsonwebtoken')
const config = require('../config')
const httpStatus = require('http-status')

exports.register = async (req, res, next) => {
  try {
    const user = new User(req.body)
    const savedUser = await user.save()
    res.status(httpStatus.CREATED)
    res.send(savedUser.transform())
  } catch (error) {
    return next(User.checkDuplicateEmailError(error))
  }
}

exports.registerCharity = async (req, res, next) => {
  try {
    const user = new User(req.body)
    const savedUser = await user.save()
    req.body.charity_id = Date.now() % 100000
    const charity = new Charity(req.body)
    const savedCharity = await charity.save()
    res.status(httpStatus.CREATED)
    res.send({savedUser, savedCharity})
  } catch (error) {
    return next(User.checkDuplicateEmailError(error))
  }
}

exports.login = async (req, res, next) => {
  try {
    const user = await User.findAndGenerateToken(req.body)
    const payload = {sub: user.id}
    const token = jwt.sign(payload, config.secret)
    return res.json({ message: 'success', user: user.transform(), token: token })
  } catch (error) {
    next(error)
  }
}
