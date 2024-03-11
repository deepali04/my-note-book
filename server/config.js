const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017";

const connectToMongo = () => {   
    mongoose.connect(mongoURI), () => {
        console.log("yoo")
        console.log("Connected to Atlas successfully");
    }
}

module.exports = connectToMongo