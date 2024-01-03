const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const validator = require('validator')

const AdminSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        trim: true, //remove space
        unique: true,
        loewercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 7,
        trim: true,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password can not contain "password"')
            }
        }
    },
    tokens: [{
        token: {
            type: String,
            required: true,
        }
    }],
})


// generate token
AdminSchema.methods.generateAuthToken = async function () {
    const user = this
    const token = jwt.sign({ _id: user._id.toString() }, 'thisismynewcourse')

    user.tokens = user.tokens.concat({ token })
    await user.save()

    return token
}

const AdminModule = mongoose.model('AdminData', AdminSchema);

module.exports = AdminModule;