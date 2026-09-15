
import express from 'express';
import authMiddlewere from '../middleware/auth.js';
import { addExpense, getAllExpense, updateExpense } from '../controllers/expenseController.js';

const expenseRouter = express.Router();

expenseRouter.post ("/add",authMiddlewere,addExpense);
expenseRouter.get ("/get", authMiddlewere, getAllExpense);

expenseRouter.put ("/update/:id", authMiddlewere,updateExpense);
expenseRouter.get ("/downloadexcel", authMiddlewere, downloadExpenseExcel);

expenseRouter.delete ("/delet/:id", authMiddlewere, deleteExpense );
expenseRouter.get("/overview", authMiddlewere, getExpenseOverview);

export default expenseRouter;


