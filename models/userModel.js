const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        validate : (value) => {
            return validator.isEmail(value);
        }
    },
    isAdmin:{
        type: Boolean,
        default: false
    },
    phone:{
        type: Number,
        required: true,
        
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
        // minlength: 8,
        // validate: {
        //     validator: function(value) {
        //         return validator.isStrongPassword(value);
        //     }
        // }
    },
    createdAt: Date,
    updatedAt: Date,
    bloodGroup: {
        type: String,
        required: true
    },
    failedAppontments:{
        type: Number,
        default: 0,
    }
});



userSchema.pre('save', async function(next){
    if(!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password,12);
    next();
})

// userSchema.methods.correctPassword = async function (
//     candidatePassword,
//     userPassword
//   ) {
//     return await bcrypt.compare(candidatePassword, userPassword);
//   };


const User = mongoose.model('User',userSchema)
module.exports = User;