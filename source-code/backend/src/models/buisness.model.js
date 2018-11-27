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
  street: {
    type: String
  },
  city: {
    type: String
  },
  country: {
    type: String
  },
  zipcode: {
    type: Number
  },
  headline: {
    type: String,
    maxlength: 50,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  type: {
    type: String,
    maxlength: 50,
    required: true
  },
  fedralId: {
    type: String,
    maxlength: 50,
    required: true
  },
  website: {
    type: String,
    maxlength: 100,
    required: true
  },
  displayPicture: {
    type: String
  }
}, {
  timestamps: true
})

buisnessSchema.method({
  transform () {
    const transformed = {}
    const fields = ['id', 'name', 'street', 'city', 'country', 'zipcode', 'coordinates', 'headline', 'description', 'type', 'fedralId', 'website', 'displayPicture']
    fields.forEach((field) => {
      transformed[field] = this[field]
    })
    return transformed
  }
})

module.exports = mongoose.model('Buisness', buisnessSchema)
