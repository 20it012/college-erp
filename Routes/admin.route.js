const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth')
const Student = require('../model/student.model')
const Admin = require('../model/admin.model')
const Staff = require('../model/staff.model')
const Department = require('../model/department.model')

//Add Admin
router.post('/', async (req, res) => {
    let admin = new Admin(req.body);
    try {
        await admin.save()
        const token = await admin.generateAuthToken()
        res.status(201).send({ admin, token })
    } catch (e) {
        res.status(400).send(e)
    }
})

//Add Student
router.post('/students', auth, async (req, res) => {
    let student = new Student(req.body);
    try {
        await student.save()
        res.status(201).send(student)
    } catch (e) {
        res.status(400).send(e)
    }
})

// Update Student Data
router.patch('/students/:id', auth, async (req, res) => {
    const studentId = req.params.id;
    try {
        const student = await Student.findById(studentId);
        if (!student) {
            return res.status(404).send({ error: 'Student not found' });
        }
        const updates = Object.keys(req.body);
        updates.forEach(update => student[update] = req.body[update]);

        await student.save();
        res.send(student);
    } catch (e) {
        res.status(400).send(e);
    }
});

// Delete Student
router.delete('/students/:id', auth, async (req, res) => {
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

//Add staff 
router.post('/staff', auth, async (req, res) => {
    let staff = new Staff(req.body);
    try {
        await staff.save()
        res.status(201).send(staff)
    } catch (e) {
        res.status(400).send(e)
    }
})

// Update Staff Data
router.patch('/staff/:id', auth, async (req, res) => {
    const staffId = req.params.id;
    try {
        const staff = await Staff.findById(staffId);
        if (!staff) {
            return res.status(404).send({ error: 'Staff member not found' });
        }

        Object.assign(staff, req.body);
        await staff.save();
        res.send(staff);
    } catch (e) {
        res.status(400).send(e);
    }
});

// Delete staff
router.delete('/staff/:id', auth, async (req, res) => {
    const staffId = req.params.id;
    try {
        const staff = await Staff.findByIdAndDelete(staffId);
        if (!staff) {
            return res.status(404).send({ error: 'Staff member not found' });
        }
        res.send(staff);
    } catch (e) {
        res.status(500).send(e);
    }
});

//Add Departments
router.post('/department',auth ,async(req, res) => {
    let department = new Department(req.body);
    try {
        await department.save()
        res.status(201).send(department)
    } catch (e) {
        res.status(400).send(e)
    }
});

// Update Department Data
router.patch('/department/:id', auth, async (req, res) => {
    const departmentId = req.params.id;
    try {
        const department = await Department.findById(departmentId);
        if (!department) {
            return res.status(404).send({ error: 'Department not found' });
        }
        Object.assign(department, req.body);
        await department.save();
        res.send(department);
    } catch (e) {
        res.status(400).send(e);
    }
});

// Delete Departments
router.delete('/department/:id', auth, async (req, res) => {
    const departmentId = req.params.id;
    try {
        const department = await Department.findByIdAndDelete(departmentId);
        if (!department) {
            return res.status(404).send({ error: 'Department not found' });
        }
        res.send(department);
    } catch (e) {
        res.status(500).send(e);
    }
});

module.exports = router