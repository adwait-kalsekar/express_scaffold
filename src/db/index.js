import mongoose from 'mongoose';

import { MONGODB_URI, DB_NAME } from '../constants.js';

const connect_db = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${MONGODB_URI}/${DB_NAME}`
    );
    console.log(`\nMongoDB Connected... ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log('Error Connecting to MongoDB Database: ', error);
    process.exit(1);
  }
};

export default connect_db;
