
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        reqired: true
    },
    email:{
        type: String,
        reqired: true,
        unique: true
    },
    password:{
        type: String,
        reqired: true
    }
});

const userModel = mongoose.models.user || mongoose.model("user",userSchema);
export default userModel;









