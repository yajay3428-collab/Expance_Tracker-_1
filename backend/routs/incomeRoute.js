
import express from 'express';
import authMiddlewere from '../middleware/auth.js';
import { addIncome, deleteIncome, downloadIncomeExcel, getAllIncome, getIncomeOverview, updateIncome } from '../controllers/incomeController.js';

const incomeRouter = express.Router();

incomeRouter.post ("/add",authMiddlewere,addIncome);
incomeRouter.get ("/get", authMiddlewere, getAllIncome);

incomeRouter.put ("/update/:id", authMiddlewere,updateIncome);
incomeRouter.get ("/downloadexcel", authMiddlewere, downloadIncomeExcel);

incomeRouter.delete ("/delet/:id", authMiddlewere, deleteIncome );
incomeRouter.get("/overview", authMiddlewere, getIncomeOverview);

export default incomeRouter;






