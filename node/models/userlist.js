/**
 * Created by Moudi on 2017/2/23.
 */
const mongoose = require('mongoose');
const usersSchema = require('../schemas/userlist');

module.exports = mongoose.model('Userlist', usersSchema);