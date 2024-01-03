const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
    }
});

const DepartmentModel = mongoose.model('Department', departmentSchema);

module.exports = DepartmentModel;