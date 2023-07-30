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
        type: Number,
        required: true,
    },
    centre:{
        type: Number,
        required: true,
    },
    createdAt: { 
        type: Date, 
        default: Date.now() 
    },
    appointmentTime:{
        type:Date,
        required: true
    },
    completed:{
        type: Boolean,
        default: false
    },
    donor:{
        type:Boolean,
        required: true
        
    },
    units:{
        type:    Number,
        required: true
    }
});

const Appointments = mongoose.model('Appointments',appointmentsSchema);
module.exports = Appointments;
