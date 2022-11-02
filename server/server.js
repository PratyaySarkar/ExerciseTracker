const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://PraSar:X92RgA9SVQCwZUCO@clusterx.ek7ac.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(uri, { useNewUrlParser: true })
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Connected to MongoDB!");
});

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');
app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

app.listen(process.env.PORT || 5000, () => {
    console.log(`Server is listening...`);
});