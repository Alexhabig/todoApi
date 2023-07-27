import bodyParser from 'body-parser';
import http from 'http';
import compression from 'compression';
import 'dotenv/config';
// import cookieParser from 'cookie-parser';
import cors from 'cors';
import router from './router';
import express from 'express';
import mongoose from 'mongoose';

const app = express();

app.use(bodyParser.json());

const allowedOrigins = process.env.Whitelist;

const corsOptions: cors.CorsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));

app.use(compression());



// const server = http.createServer(app);
const PORT = process.env.PORT

// server.listen(3001, () => {
//     console.log(`Server running on http://localhost:3001/`)
// });
app.get("/",(req:express.Request,res:express.Response)=>{
res.send("Hello")
})

app.listen(PORT,()=>{
    console.log(`Server running on Port ` + PORT)
})

const MONGO_URL = process.env.Mongo_Connection_URL;

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on('error', (error:Error) => console.log(error));

app.use('/', router());