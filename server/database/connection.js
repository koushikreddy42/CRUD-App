const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // mongodb connection string
        const con = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // Remove the deprecated options
            // useFindAndModify: false,
            // useCreateIndex: true
        });
        console.log(`MongoDB connected: ${con.connection.host}`);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

module.exports = connectDB;
