import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import { CORS_ORIGIN } from './utils/constants.js';

const app = express();

// Middlewares
const corsOptions = {
  origin: CORS_ORIGIN,
  credentials: true,
};

const jsonOptions = {
  limit: '16kb',
};

const urlencodedOptions = {
  extended: true,
  limit: '16kb',
};

app.use(cors(corsOptions));
app.use(express.json(jsonOptions));
app.use(express.urlencoded(urlencodedOptions));
app.use(express.static('public'));
app.use(cookieParser());

// Routes Import
import healthRouter from './routes/health.routes.js';
import userRouter from './routes/user.routes.js';

//Routes Declaration
app.use('/health', healthRouter);
app.use('/users', userRouter);

export default app;
