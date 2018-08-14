
const mongoose = require('mongoose');
const usersSchema = require('../schemas/add');

module.exports = mongoose.model('Add', usersSchema);