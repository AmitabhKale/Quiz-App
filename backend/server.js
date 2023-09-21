const express = require('express');
const dotenv = require('dotenv')
const cors = require('cors')
const connectToMongo = require('./config/connection');
const app = express();

dotenv.config({})

app.use(cors())

connectToMongo()

app.use('/api/quiz', require('./routes/quizRoutes'))

const PORT = 5000;

app.listen(5000, () => {
    console.log(`Server is Listening on PORT ${PORT} in dev mode`)
})