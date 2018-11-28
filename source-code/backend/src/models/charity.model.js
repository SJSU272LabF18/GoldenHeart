'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const charitySchema = new Schema({
  charity_id: {
    type: Number,
    required: true,
    index: true
  },
  charity_name: {
    type: String,
    required: true
  },
  charity_mission: {
    type: String,
    required: true
  },
  charity_url: {
    type: String,
    required: true
  },
  category_id: {
    type: Number,
    required: true
  },
  category_name: {
    type: String,
    required: true
  },
  sub_category: {
    type: String,
    required: true
  },
  work_type: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  latitude: {
    type: Number,
    required: true
  },
  longitude: {
    type: Number,
    required: true
  },
  minage: {
    type: Number,
    default: 17
  },
  maxage: {
    type: Number,
    default: 100
  },
  total_contributions: {
    type: Number,
    required: true
  },
  accountability_score: {
    type: Number,
    default: Math.round(Math.random() * 100)
  },
  financial_score: {
    type: Number,
    default: Math.round(Math.random() * 100)
  },
  overall_score: {
    type: Number,
    default: Math.round(((Math.random() * 100) % 15) + 85) % 100
  }
}, {
  timestamps: true
})

charitySchema.method({
  transform () {
    const transformed = {}
    const fields = ['charity_id', 'charity_name', 'charity_mission', 'charity_url', 'category_name', 'sub_category', 'work_type', 'city', 'state', 'latitude', 'longitude', 'minage', 'maxage', 'total_contributions']
    fields.forEach((field) => {
      transformed[field] = this[field]
    })
    return transformed
  }
})

module.exports = mongoose.model('Charity', charitySchema)
