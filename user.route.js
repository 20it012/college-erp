// const express = require('express');
// const router = express.Router();
// const auth = require('../middleware/auth')
// const User = require('../model/user.model')


// router.post("/user", async (req, res) => {
//     let user = new User(req.body);
//     try {
//         await user.save()
//         res.status(201).send(user)
//         if (req.user.role === 'admin') {
//             res.send(app.use('/admin', adminrouter));
//             res.send("its admin")
//           } else if (req.user.role === 'staff'){
//             res.send(app.use('/staff', staffRoutes));
//             res.send("its staff member")
//           } else if (req.user.role === 'admin' || 'staff'){
//             res.send(app.use('/attendance', attendanceRoutes));
//             res.send("itsadmin or staff")
//           } else {
//             res.send("i think it's user")
//           }
//     } catch (e) {
//         res.status(400).send(e)
//     }
// })