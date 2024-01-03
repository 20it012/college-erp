const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    date: {
        type: Date,
    },
    isPresent: {
        type: Boolean,
        default: false,
    },
});

const AttendanceModule = mongoose.model('Attendance', attendanceSchema);

module.exports = AttendanceModule;