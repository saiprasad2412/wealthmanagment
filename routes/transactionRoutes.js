const express=require('express')
const { getAllTransactions, addTransaction } = require('../controllers/transactionController')
const { verifyJWT } = require('../middleware/auth.middleware.js')

const router=express.Router()

router.route('/get-transactions').get(verifyJWT,getAllTransactions)
router.route('/add-transaction').post(verifyJWT,addTransaction)

module.exports=router