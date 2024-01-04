const express = require('express');
const router = express.Router();
const {auth, isstaffcheck} = require('../middleware/auth')
const Student = require('../model/student.model')
//const User = require('../model/user.model')

//Add Student
router.post('/students', auth, isstaffcheck, async (req, res) => {
    let student = new Student(req.body);
    try {
        await student.save()
        res.status(201).send(student)
        console.log(token)
    } catch (e) {
        res.status(400).send(e)
    }
})

// Update Student Data
router.patch('/students/:id', auth, isstaffcheck, async (req, res) => {
    const studentId = req.params.id;
    try {
        const student = await Student.findById(studentId);
        if (!student) {
            return res.status(404).send({ error: 'Student not found' });
        }
        Object.assign(student, req.body);

        await student.save();
        res.send(student);
    } catch (e) {
        res.status(400).send(e);
    }
});

// Delete Student
router.delete('/students/:id', auth, isstaffcheck, async (req, res) => {
    const studentId = req.params.id;
    try {
        const student = await Student.findByIdAndDelete(studentId);
        if (!student) {
            return res.status(404).send({ error: 'Student not found' });
        }
        res.send(student);
    } catch (e) {
        res.status(500).send(e);
    }
});

module.exports = router