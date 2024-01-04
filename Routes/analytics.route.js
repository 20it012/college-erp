const express = require('express');
const router = express.Router();
const Student = require('../model/student.model')
const Attendance = require('../model/attendance.model')


router.get('/student-analytics', async (req, res) => {
    try {
      const analyticsData = await Student.aggregate([
        {
          $group: {
            _id: { currentSemester: '$currentSemester', department: '$department' },
            totalStudents: { $sum: 1 }
          }
        },
        {
          $group: {
            _id: '$_id.currentSemester',
            totalStudents: { $sum: '$totalStudents' },
            departments: {
              $push: {
                department: '$_id.department',
                count: '$totalStudents'
              }
            }
          }
        },
        {
          $sort: { totalStudents: -1 }
        }
      ]);
  
      res.json(analyticsData);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });



  router.get('/absent-students', async (req, res) => {
    try {
        const { batch, department, currentSemester, specificDate } = req.query;

        const query = { ...(batch && { batch }), ...(department && { department }), ...(currentSemester && { currentSemester }), isPresent: false, date: specificDate };

        const absentStudents = await Attendance.aggregate([
            { $match: query },
            { $group: { _id: { $dateToString: { format: '%Y-%m-%d', date: '$date' } }, students: { $push: '$studentId' } } },
            { $project: { _id: 0, date: '$_id.date', students: 1 } },
        ]);

        res.json(absentStudents);
    } catch (err) {
        console.error(err);
        res.status(500).send(err.message);
    }
});

    router.get('/GetLowAttendanceStudents', async (req, res) => {
            try {
                const { batch, department, currentSemester, specificDate } = req.query;
                const query = { ...(batch && { batch }), ...(department && { department }), ...(currentSemester && { currentSemester }), ...(specificDate && { date: specificDate }) };
         
                const totalClasses = 2;
                const attendanceThreshold = 0.75;
         
                const lowAttendanceStudents = await Attendance.aggregate([
                    { $match: query },
                    { $group: { _id: '$studentId', totalClasses: { $sum: 1 } } },
                    { $match: { totalClasses: { $lt: totalClasses * attendanceThreshold } } },
                    { $project: { _id: 0, studentId: '$_id' } },
                ]);
         
                res.json(lowAttendanceStudents);
            } catch (err) {
                console.error(err);
                res.status(500).send(err.message);
            }
        });
    
        router.get('/GetVacantSeats', async (req, res) => {
            try {
                const { batch, department } = req.query;
                const query = { ...(batch && { batch }), ...(department && { department: department }) };
                const totalStudents = await Student.countDocuments(query);
                const totalStudentsIntake = 2000;
                const availableIntake = totalStudentsIntake - totalStudents;
        
                const branches = await Student.aggregate([
                    { $match: query },
                    { $group: { _id: '$department', totalStudents: { $sum: 1 } } },
                    { $project: { _id: 0, department: '$_id', totalStudents: 1 } },
                ]);
        
                const branchesMap = branches.reduce((acc, branch) => {
                    acc[department.department] = {
                        totalStudents: department.totalStudents,
                        totalStudentsIntake: 1000,
                        availableIntake: 1000 - department.totalStudents,
                    };
                    return acc;
                }, {});
        
                const result = { batch, totalStudents, totalStudentsIntake, availableIntake, department: branchesMap };
                res.json(result);
            } catch (err) {
                console.error(err.message);
                res.status(500).send('Server Error');
            }
        }
        );
  
  module.exports = router;
