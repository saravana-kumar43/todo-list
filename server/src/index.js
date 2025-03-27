import express from 'express'
import { config } from 'dotenv';
import cors from 'cors';
config()

const app = express();

const PORT = process.env.PORT || 3000
const DB_URL = process.env.DB_URL;
const CORS_ORIGIN = process.env.CORS_ORIGIN;
// npm i cors

app.use(express.json());
app.use(cors({
    origin: CORS_ORIGIN
}))

// routes
import TodoRouter from './routers/todo.routes.js'

app.use('/api/v1/todo/' , TodoRouter);


// app starting

import connect_db from './db/index.js'

connect_db(DB_URL)
    .then(() => app.listen(PORT , ()=> console.log(`The api runnig at http://localhost:${PORT}`)))
    .catch((err) => console.log(`Error occured in connecting databse :: ${err.message}`))