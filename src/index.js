import dotenv from 'dotenv';
import express from 'express';

import connect_db from './db/index.js';
import { SERVER_PORT } from './constants.js';

dotenv.config({ path: './env' });

const app = express();

connect_db();
