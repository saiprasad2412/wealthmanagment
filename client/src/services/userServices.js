import axios from 'axios'
export const loginFn=async(payload)=>{
    try {
        const res=await axios.post('http://localhost:8080/api/v1/auth/login',payload,{ withCredentials: true });
        return res.data;
        
    } catch (error) {
        console.error("Error in loginFn:", error.response?.data || error.message);
        return error.response?.data || { success: false, message: error.message };
        
    }
}

export const registerFn=async(payload)=>{
    try {
        const res=await axios.post('http://localhost:8080/api/v1/auth/register',payload);
        return res.data;
    } catch (error) {
        console.error("Error in loginFn:", error.response?.data || error.message);
        return error.response?.data || { success: false, message: error.message };
        
    }
}