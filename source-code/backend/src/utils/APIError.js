// justmoon CustomError Handling https://gist.github.com/justmoon/15511f92e5216fa2624b

'use strict'
const httpStatus = require('http-status')

module.exports = function APIError (message, status = httpStatus.INTERNAL_SERVER_ERROR, extra = null) {
  Error.captureStackTrace(this, this.constructor)
  this.name = this.constructor.name
  this.message = message
  this.status = status
  this.extra = extra
}

require('util').inherits(module.exports, Error)
