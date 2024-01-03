const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth')
const Attendance = require('../model/attendance.model')
const Student = require('../model/student.model')

// Add Attendance
router.post('/', auth, async (req, res) => {
    try {
        const { studentId, isPresent } = req.body;
        const student = await Student.findById(studentId);
        if (!student) {
            return res.status(400).send("Student Not Found")
        }
        const attendance = new Attendance(req.body);
        const result = await attendance.save();
        res.json(result);
    } catch (e) {
        res.status(400).send(e)
    }
})

// Update Attendance
router.patch('/:id', auth, async (req, res) => {
    const attendanceId = req.params.id;
    try {
        const attendance = await Attendance.findById(attendanceId);
        if (!attendance) {
            return res.status(404).send({ error: 'Attendance record not found' });
        }

        Object.assign(attendance, req.body);
        const result = await attendance.save();
        res.json(result);
    } catch (e) {
        res.status(400).send(e);
    }
});

module.exports = router