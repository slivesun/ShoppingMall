const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    yhid: String,
    yhzh: String,
    yhnc: String,
    yhdj:String,
    xfje:String,
    ddsl:String,
    onoff:Boolean,
    off:Boolean
});