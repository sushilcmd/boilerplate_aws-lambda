const mongoose = require("mongoose");

// const mongodbURI = process.env.mongoDbURI;
const mongodbURI = "mongodb+srv://sushil:4thpointer@cluster0-2avdp.mongodb.net/tt?retryWrites=true&w=majority";


let dbConn;

const makeConnection = async function() {
    if (dbConn) {
        console.log('==> using existing DB connection')
        return dbConn
    } else {
        console.log('===> Making new DB Connection')
        try {
            dbConn = await mongoose.connect(mongodbURI, { useNewUrlParser: true });
            console.log('==> New DB Connection Established')
        } catch (err) {
            console.log('==> New DB Connection error')
            throw new Error(err.message)
        }
    }
}

module.exports = { makeConnection }