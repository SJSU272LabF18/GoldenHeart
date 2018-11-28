'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const buisnessSchema = new Schema({
  id: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    index: true
  },
  name: {
    type: String,
    maxlength: 50,
    required: true
  },
  website: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})

buisnessSchema.method({
  transform () {
    const transformed = {}
    const fields = ['id', 'name', 'website']
    fields.forEach((field) => {
      transformed[field] = this[field]
    })
    return transformed
  }
})

module.exports = mongoose.model('Buisness', buisnessSchema)
