
import express from 'express';
import { getCurrentUser, loginUser, registerUser, updatepassword, updateProfile } from '../controllers/userController.js';
import authMiddlewere from '../middleware/auth.js';

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);

// protected Router 

userRouter.get("/me",authMiddlewere,getCurrentUser);
userRouter.put("/profile", authMiddlewere, updateProfile);
userRouter.put("/password", authMiddlewere, updatepassword);


export default userRouter;













