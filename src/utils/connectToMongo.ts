import mongoose from 'mongoose';
import { envConfig } from './envConfig';

const connectToMongo = async (): Promise<void> => {
    try {
        await mongoose.connect(envConfig.MONGODB_URI);
        console.log('Connected to MongoDB successfully');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
};

export default connectToMongo;