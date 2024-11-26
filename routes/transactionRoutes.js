const express=require('express')
const { getAllTransactions, addTransaction } = require('../controllers/transactionController')

const router=express.Router()

router.route('/get-transactions').get(getAllTransactions)
router.route('/add-transaction').post(addTransaction)

module.exports=router