const transactionModel= require('../models/transactionModel.js')

const getAllTransactions=async(req,res)=>{
    console.log('es',req.user);
    try {
        
        // Fetch all transactions linked to the logged-in user
        const transactions = await transactionModel.find({ user: req.user._id }).sort({ date: -1 });

        res.status(200).json({
            success: true,
            data:transactions,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: error.message,
            error: error.message,
        });
    }
}


const addTransaction = async (req, res) => {
    try {
        const newTransaction = new transactionModel({
            ...req.body,
            user: req.user._id, 
        });

        await newTransaction.save();

        res.status(201).json({
            success: true,
            message: "Transaction added successfully",
        });
    } catch (error) {
        console.error("Error adding transaction:", error);

        res.status(500).json({
            success: false,
            message: error.message || "Internal Server Error",
        });
    }
};



module.exports={getAllTransactions,addTransaction}