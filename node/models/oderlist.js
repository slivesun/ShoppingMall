/**
 * Created by Moudi on 2017/3/12.
 */
const mongoose = require('mongoose');
const usersSchema = require('../schemas/oderlist');

module.exports = mongoose.model('Oderlist', usersSchema);