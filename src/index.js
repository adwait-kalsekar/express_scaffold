import dotenv from 'dotenv';

import app from './app.js';
import connect_db from './db/index.js';
import { SERVER_PORT } from './utils/constants.js';

dotenv.config({ path: './env' });

// Start Express Application
connect_db()
  .then(() => {
    app.listen(SERVER_PORT, () => {
      console.log(`Server Listening on port ${SERVER_PORT}`);
    });
  })
  .catch((err) => {
    console.log('Server Connection Failed');
  });
