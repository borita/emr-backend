const Encounters = require('../models/Encounters');
const merge = require('lodash.merge');

module.exports = {
  create: (body) => Encounters.create(body),
  find: () => Encounters.find({ is_Active: true }),
  findById: (id) => Encounters.findById(id),
  update: (encounter, body) => {
    const merged = merge(encounter,body);
    return merged.save();
  }
}