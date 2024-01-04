const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')

const staffSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    department: {
        type: String,
        required: true,
        trim: true,
    },
    role: [{
        type: String,
        enum: ['admin', 'staff'],
    }],
    tokens: [{
        token: {
            type: String,
            required: true,
        }
    }],
});

// generate token with role 
staffSchema.methods.generateAuthToken = async function (role) {
    const user = this;
    const token = jwt.sign({ _id: user._id.toString(), role: role || user.role }, 'thisismynewcourse');

    user.tokens = user.tokens.concat({ token });
    await user.save();
    return token;
}

const StaffModule = mongoose.model('Staff', staffSchema);

module.exports = StaffModule;