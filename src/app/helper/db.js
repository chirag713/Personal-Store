import mongoose from 'mongoose'
const cofig = {
    isconnected: 0,
}
export const ConnectDb = async () => {
    if (cofig.isconnected) return;
    try {
        const { connection } = await mongoose.connect(process.env.MONGO_DB_URL);        
        cofig.isconnected = connection.readyState;
    } catch (error) {}
};