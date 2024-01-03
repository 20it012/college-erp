const mongoose = require('mongoose')
const validator = require('validator')

const taskSchema = new mongoose.Schema({

    // name, phone number, department, batch, current semester.
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    phoneNumber: {
        type: Number,
        trim: true
    },
    department: {
        type: String,
        trim: true
    },
    batch: {
        type: String,
        trim: true
    },
    currentSemester: {
        type: Number,
        trim: true
    },
})

const StudentModule = mongoose.model('StudentData', taskSchema);

module.exports = StudentModule;