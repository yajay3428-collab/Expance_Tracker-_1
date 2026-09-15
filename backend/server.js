import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { connectDB } from './config/db.js';
import userRouter from './routs/userRoute.js';
import incomeRouter from './routs/incomeRoute.js';
import expenseRouter from './routs/expenseRoute.js';
import dashboardRouter from './routs/dashboardRoute.js';



const app = express();
const port = 4000;


// MIDDLEWERES
app.use(cors());
app.use(express.json());
app.use (express.urlencoded({ extended: true }));




// DB
connectDB();


// ROUTS 
app.use("/api/user", userRouter);
app.use("/api/income", incomeRouter);
app.use("/api/expense", expenseRouter);
app.use("/api/dashboard", dashboardRouter);


app.get('/', (req,res) => {
    res.send("API WORKING");

})

app.listen(port, () =>{
    console.log(`server started on http://localhost:${port}`);

});

