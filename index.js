const express = require('express');
require('./mongodb')
const adminrouter = require("./Routes/admin.route")
const staffRoutes = require('./Routes/staff.route');
const attendanceRoutes = require('./Routes/attendance.route');
const app = express();

const port = 3000; // You can choose any available port

// mongodb connect
// mongoDB()

 // Define a admin route
app.use(express.json())
app.use('/admin', adminrouter);

// Define a staff route
app.use(express.json())
app.use('/staff', staffRoutes);

// Define a attendance route
app.use(express.json())
app.use('/attendance', attendanceRoutes);


// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

