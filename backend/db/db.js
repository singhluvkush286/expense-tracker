const mongoose = require('mongoose');

const dbUrl = "mongodb+srv://luvkush:4rUyz4a62jbiALfB@cluster0.8ndhhcx.mongodb.net/?retryWrites=true&w=majority";

const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

const db = async () => {
    try {
        await mongoose.connect(dbUrl, connectionParams);
        console.log('Connected to database');
    } catch (err) {
        console.error(`Error connecting to the database. \n${err}`);
    }
};

module.exports = { db };
