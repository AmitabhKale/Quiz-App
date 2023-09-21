const mongoose = require('mongoose');


const connectToMongo = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected `)
    } catch (err) {
        console.error(err.message);
        process.exit(1)
    }
}

module.exports = connectToMongo;