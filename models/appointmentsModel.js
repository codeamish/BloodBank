const mongoose = require('mongoose');
const validator = require('validator');

const appointmentsSchema =  new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true,
        validate: (value) => {
            return (value>=18);
        }
    },
    bloodGroup: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate : (value) => {
            return validator.isEmail(value);
        }
    },
    phone:{
        type: number,
        required: true,
        validate: (value) => {
            return validator.isMobilePhone(value);
        }
    },
    centre:{
        type: String,
        required: true
    },
    createdAt: { type: Date, default: Date.now() },
    
    appointmentTime:{
        type: Date,
    },
    

});