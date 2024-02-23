import dotenv from 'dotenv';

import connect_db from './db/index.js';
import { SERVER_PORT } from './utils/constants.js';

dotenv.config({ path: './env' });

// Start Express Application
connect_db().then().catch;
