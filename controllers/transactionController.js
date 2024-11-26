const transactionModel =require('../models/transactionModel.js');
const getAllTransactions=async(req,res)=>{
    try {
        const res= await transactionModel.find({});
        res.status(200).json({
            success:true,   
            data:res
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success:false,
            message:"Something went wrong while fetching transactions"
        })
        
        
    }
}

const  addTransaction=async(req,res)=>{
    try {
        const newTransaction= new transactionModel(req.body);
        await newTransaction.save();
        res.status(201).json({
            success:true,
            message:"Transaction added successfully"
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success:false,
            message:"Something went wrong while adding transaction"
        });
        
        
    }
}

module.exports={getAllTransactions,addTransaction}