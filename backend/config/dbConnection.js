const mongoose = require('mongoose');

const connectDB = async () => {
    
    await mongoose.connect(process.env.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
})

    console.log("Connection with DB established");
    
}

module.exports = connectDB;
