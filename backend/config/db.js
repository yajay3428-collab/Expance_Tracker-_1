
import mongoose from 'mongoose'

 export const connectDB = async() =>{
    await mongoose.connect(`mongodb+srv://yajay3428_db_user:xjRYnNpYEr6hKqLX@cluster0.qgl7mxy.mongodb.net/Expense_Tracker`)
    .then(()=> console.log("DB CONNECTED"));


}  


/*    import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("DB CONNECTED");
    } catch (error) {
        console.error("MongoDB connection failed:", error.message);
    }
};   */















