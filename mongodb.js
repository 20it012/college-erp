// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient

// const connectionURL = 'mongodb://127.0.0.1:27017'
// const databaseName = 'assignment'
// console.log("connected please")

// MongoClient.connect("mongodb://localhost:27017", (error, client)=> {
//     console.log("connected")
//     if(error){
//         return console.log("error while connection")
//     }

//     console.log("connection to database")

// })

// // //crud operation

// // const mongodb = require("mongodb")
// // const MongoClient = mongodb.MongoClient
// // const ObjectId = mongodb.ObjectId    
// //   we acn write instead of this also
 const {MongoClient,ObjectId} = require('mongodb')


// const connectionURL = 'mongodb://127.0.0.1:27017'
// const databaseName = 'task-manager'

// // const id = new ObjectId()
// // console.log(id.getTimestamp())

// MongoClient.connect(connectionURL, (error, client)=> {
//     if(error){
//         return console.log("error while connection")
//     }

//     //console.log("connection to database")

//     const db = client.db(databaseName)


//     db.collection('users').updateOne({
//         _id: new ObjectId("6581440e54b6ba42f02a2bed")
//     },
//     {
//         $set: {
//             Name: 'raj'
//         }
//     })
//     .then((result) => {
//         console.log(result)
//     }).catch((error) => {
//         console.log(error)
//     })

//     // db.collection('users').findOne({Name:'Divyesh'}, (error,user) => {
//     //     if(error){
//     //         return console.log("error finding from db")
//     //     }

//     //     console.log(user)
//     // })





//     // db.collection('users').insertOne({
//     //     _id:id,
//     //     Name:'ramesh',
//     //     Age:23
//     // })



//     // db.collection('users').insertMany([
//     //     {
//     //         Name:'ram',
//     //         Age:25
//     //     },
//     //     {
//     //         Name:'shiv',
//     //         Age:100
//     //     }],
//     //     (error,result) => {
//     //         if(error){
//     //             return console.log("unable to insert data")
//     //         }
//     //         console.log(result.ops)
//     //     })
// })

// // const express = require('express')
// const mongoose = require('mongoose')
// // // const app = express()
// mongoose.connect('mongodb://localhost:27017/task-manager')
// .then(() => {
//   console.log('Connected to MongoDB');
// })
// .catch(error => {
//   console.error('Error connecting to MongoDB:', error);
// });

// app.listen(3000,()=>{
//     console.log("on port 3000!!")
// })

// const mongoose = require('mongoose');

// // Replace 'your_database_name' with the name of your MongoDB database
// const databaseName = 'demo';

// // Connect to MongoDB
// mongoose.connect(`mongodb://localhost:27017/${databaseName}`, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// // Get the default connection
// const db = mongoose.connection;

// // Event handlers for the connection
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// db.once('open', () => {
//   console.log(`Connected to MongoDB: ${databaseName}`);
//   // Your application logic goes here
// });

const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/task-api")//, {


// const User = mongoose.model('User', {
//     Name: {
//         type: String,
//         required: true
//     },
//     email: {
//         type: String,
//         required: true,
//     },
//     Age: {
//         type: Number,
//     }
// })

// const me = new User({
//     Name: 'raj',
//     Age: 9,
//     email: 'MYEMAIL@MEAD.IO'
// })

// me.save().then(()=> {
//     console.log(me)
// }).catch((error) =>{
//     console.log("error! ..",error)
// })  
console.log("database connected")

// module.exports = {User}