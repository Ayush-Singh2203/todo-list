import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_singhayush2203;
const PASSWORD = process.env.DB_Ayush2203;

const connection = () => {

    const MONGODB_URI = "mongodb+srv://singhayush2203:@Ayush2203@cluster0.hksgo6u.mongodb.net/?retryWrites=true&w=majority";

    mongoose.connect(MONGODB_URI, { useNewUrlParser: true });   
    mongoose.connection.on('connected', () => {
        console.log('Database connected Successfully');
    })

    mongoose.connection.on('disconnected', () => {
        console.log('Database disconnected');
    })

    mongoose.connection.on('error', () => {
        console.log('Error while connecting with the database ', error.message);
    })
}

export default Connection;
