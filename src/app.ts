import express, { Application } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

// Routers
import profileRouter from './Routers/Profiles';

// App
const app: Application = express();

// Usings
app.use(cors());
app.use(bodyParser.json())
app.use(express.static("build"));
app.use("/api/profiles", profileRouter);


const PORT = 3300;
app.listen(PORT, (() => {
    console.log(`Listening port on ${PORT}`);
}))

import mongooseConnection from './Others/mongooseConnection';
mongooseConnection.Init()