'use strict'

const httpStatus = require('http-status')
const User = require('../models/user.model')

exports.update = async (req, res, next) => {
  try {
    const user = new User(req.body)
    let userDetail = await User.findByIdAndUpdate(req.body.id, user.updateTransform()).exec()
    userDetail = await User.findById(req.body.id).exec()
    res.status(httpStatus.ACCEPTED)
    res.send(userDetail.updateTransform())
  } catch (error) {
    next(error)
  }
}

exports.detail = async (req, res, next) => {
  try {
    const userDetail = await User.findById(req.params.userid).exec()
    res.status(httpStatus.OK)
    res.send(userDetail.transform())
  } catch (error) {
    next(error)
  }
}
