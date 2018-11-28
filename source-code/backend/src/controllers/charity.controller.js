'use strict'

const httpStatus = require('http-status')

exports.payment = async (req, res, next) => {
  try {
    const response = { payLoad: req.body }
    res.status(httpStatus.ACCEPTED)
    res.send(response)
  } catch (error) {
    next(error)
  }
}
