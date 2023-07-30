const mongoose = require('mongoose');
const validator = require('validator');

const bloodBanksSchema =  new mongoose.Schema({
    location:{
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    centre:{
        type: Number,
        required: true
    },
    manager: {
        required: true,
        type: String
    },
    bloodUnits:{
        type: Array,
        default: [
            {
                "O+":0,
                "A+":0,
                "A-":0,
                "B+":0,
                "B-":0,
                "AB+":0,
                "AB-":0,
                "O-":0  
            }
        ]
    }
});

const BloodBanks = mongoose.model('bloodBanks', bloodBanksSchema);
module.exports = BloodBanks;