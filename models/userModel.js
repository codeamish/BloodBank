const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
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
    name:{
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true,
        validate: (value) => {
            return (value>=18 && value<=100);
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        validate: {
            validator: function(value) {
                return validator.isStrongPassword(value);
            }
        }
    },
    createdAt: Date,
    updatedAt: Date,
    bloodGroup: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('user',userSchema)