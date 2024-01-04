const jwt = require('jsonwebtoken')
const User = require('../model/user.model')

const auth = async (req,res,next) => {
    try{
        const token = req.header('Authorization').replace('Bearer ','')
        if (!token) {
            return res.status(401).send({ error: 'Token not found' });
        }
        const decode = jwt.verify(token,'thisismynewcourse')
        //const user = await User.findOne({ _id: decode._id, 'tokens.token': token })
        const userRoles = await User.findOne({ _id: decode._id}, { role: 1, _id: 0 });
        req.userRoles = userRoles ? userRoles.role : [];
        req.token = token;
        next();
    } catch(e){
        res.status(401).send({ error: 'Please authenticate.'})
    }   
};

const isadmincheck = (req, res, next) => {
    if (req.userRoles && req.userRoles.includes('admin')) {
        console.log(req.userRoles);
        next();
    } else {
        res.status(401).send({ error: 'Only Admin Access!' });
    }
};

const isstaffcheck = (req, res, next) => {
    if (req.userRoles && req.userRoles.includes('staff')) {
        console.log(req.userRoles);
        next();
    } else {
        res.status(401).send({ error: 'Only Staff Access!' });
    }
};


module.exports = { auth, isadmincheck, isstaffcheck }; 
