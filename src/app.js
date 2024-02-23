import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import { CORS_ORIGIN } from './utils/constants';

const app = express();

// Middlewares
corsOptions = {
  origin: CORS_ORIGIN,
  credentials: true,
};

jsonOptions = {
  limit: '16kb',
};

urlencodedOptions = {
  extended: true,
  limit: '16kb',
};

app.use(cors(corsOptions));
app.use(express.json(jsonOptions));
app.use(express.urlencoded(urlencodedOptions));
app.use(express.static('public'));
app.use(cookieParser());

export default app;
