const mongoose = require('mongoose');
const validator = require('validator');

const bloodUnitsSchema =  new mongoose.Schema({
    bloodType:{
        type: String
    },
});

module.exports = mongoose.model('bloodUnit',bloodUnitsSchema);