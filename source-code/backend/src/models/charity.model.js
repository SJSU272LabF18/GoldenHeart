'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const charitySchema = new Schema({
  id: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    index: true
  },
  name: {
    type: String
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
  coordinates: {
    type: [Number]
  },
  headline: {
    type: String
  },
  description: {
    type: String
  },
  operationAreas: {
    type: String
  },
  goal: {
    type: String
  },
  motivation: {
    type: String
  },
  type: {
    type: String
  },
  registrationNumber: {
    type: String
  },
  taxExemptNumber: {
    type: String
  },
  fiveOOne: {
    type: String
  },
  audited: {
    type: String
  },
  website: {
    type: String
  },
  displayPicture: {
    type: String
  }
}, {
  timestamps: true
})

charitySchema.method({
  transform () {
    const transformed = {}
    const fields = ['id', 'name', 'street', 'city', 'country', 'coordinates', 'headline', 'description', 'operationAreas', 'goal', 'motivation', 'type', 'registrationNumber', 'taxExemptNumber', 'fiveOOne', 'audited', 'website', 'displayPicture']
    fields.forEach((field) => {
      transformed[field] = this[field]
    })
    return transformed
  }
})

module.exports = mongoose.model('Charity', charitySchema)
