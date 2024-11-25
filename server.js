const express= require('express');
const cors=require('cors');
const morgan=require('morgan');
const dotenv=require('dotenv');
const connectDb = require('./config/index.js');
const app= express();

//config dotenv file
dotenv.config();

//database connection
connectDb();
//middleware
app.use(express.json());
app.use(cors())
app.use(morgan('dev'));

//routes
const userRoutes=require('./routes/userRoutes.js')
app.use("/api/v2/auth",userRoutes)
app.get('/', (req,res)=>{
    res.send('hello')
})

const PORT=8080 ||process.env.PORT;

app.listen(PORT,()=>{   
    console.log(`server is running on port ${PORT}`)
})
