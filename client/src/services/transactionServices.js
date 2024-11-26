import axios from "axios";

export const addTransactionFn=async(payload)=>{
    try {
        const res= await axios.post('http://localhost:8080/api/v1/transactions/add-transaction',payload);
        return res;
        
    } catch (error) {
        console.error("Error in loginFn:", error.response?.data || error.message);
        return error.response?.data || { success: false, message: error.message }
        
    }
}

export const getAllTransactionFn=async()=>{
    try {
        const res= await axios.get('http://localhost:8080/api/v1/transactions/get-transactions');
        return res;
        
    } catch (error) {
        console.error("Error in loginFn:", error.response?.data || error.message);
        return error.response?.data || { success: false, message: error.message }
        
    }
}