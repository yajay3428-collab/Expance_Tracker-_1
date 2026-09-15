
import expenseModel from "../models/expenseModel.js";
import getDateRange from "../utils/dateFilter.js";
import XLSX from 'xlsx';



// add expense
export async function addExpense(req,res) {
    const userId = res.user._id;
    const {description, amount, category, date} = req.body;

    try {
    if(!description || !amount || !category || !date) {
        return res.status(400).json ({
            success: false,
            message: "All fields are required"
        });
    }
    const newExpense = new expenseModel({
        userId,
        description,
        amount,
        category,
        date: new Date(date)
    });

    await newExpense.save();
    res.json({
        success: true,
        message: "Expense added succesfully!"
    });
    } 
    
    catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            messege: "Server Error"
        });
    } 
}

// to all Expenses

export async function getAllExpense(req,res) {
    const userId = res.user._id;
    try {
    const expense = await expenseModel.find({userId}).sort({date: -1});
    res.json(expense);
    } 
    
    catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            messege: "Server Error"
        });
    }
}

// to update the expense 

export async function updateExpense(req,res) {
    const {id} = req.params;
    const userId = res.user._id;
    const {description, amoiunt} = req.body;

    try {
        const updatedExpense = await incomeModel.findByIdAndUpdate(
            { _id: id, userId}, 
            { description, amount},
            { new: true }
        );
        if(!updatedExpense) {
            return res.status(404).json({
                success: false,
                message: "Expense not found"
            });
        }
        res.jeson({success: true, message: "Expense updated successfully", data: 
            updatedExpense
        });
    } 
    catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            messege: "Server Error"
        });
    }
}

// To delete an expese

export async function deletExpense(req,res) {
    try {
    const expense = await expenseModel.findByIdAndDelete({_id: res.params.id});
    if(!expense){
        return res.json(404).json({
            success: false,
            message: "Expense not found"
        });
    }    
    return res.json({
        success: true,
        message: "Expense deleted successfully!"
    });
    } 
    
    catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            messege: "Server Error"
        });
    }
}

// download excel for expense 

export async function downloadExpenseExcel(req,res) {
    const userId = res.user._id;
    try {
    const expense = awiat expenseModel.find({userId}).sort({date: -1});
    const plainData = expense.map((exp)=> ({
        Description: exp.description,
        Amount: exp.amount,
        Category: exp.catogory,
        Daate: new Date(exp.date).toLocaleDateString(),
    }));
        const worksheet = XLSX.utils.json_to_sheet(plainData);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook,worksheet, "expenseModel");
        XLSX.writeFile(workbook, "expense_details.xlsx");
        res.download("expense_details.xlsx");
    
    } 
        
    catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            messege: "Server Error"
        });
    }
}

// to get the overview

export async function getExpenseOverview(req,res) {
    try {
        const userId = res.user._id;
        const { range = "monthly"} = req.query;
        const { start,end} = getDateRange(range);

        const Expense = await expenseModel.find({
            userId,
            date: {$gte: start, $lte: end},
        }).sort({ date: -1});
         
    const totalExpense = expense.reduce((acc, cur) => acc + cur.amount, 0);
    const averageExpense = expense.length > 0 ? totalExpense / expense.length : 0;
    const numberOfTransactions = expense.length;

    const recentTransactions = expense.slice(0, 5);



        res.json({
            success: true,
            data: {
                totalExpense,
                averageExpense,
                numberOfTransactions,
                recentTransactions,
                range
            }
        });
    } 
    
    catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            messege: "Server Error"
        });
    }
}

