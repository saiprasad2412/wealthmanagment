const mongoose= require('mongoose');
const bcrypt=require('bcrypt')
const jwt = require('jsonwebtoken')
const userSchema= new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name']
    },
    email: {
        type: String,
        required: [true, 'Please add an email'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please add a password']
    }
},{timestamps: true})

userSchema.pre("save",async function(next){
    if(!this.isModified("password"))next();
    this.password=await bcrypt.hash(this.password,10)
})

userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password,this.password)
}

userSchema.methods.generateAccessToken=function(){
    return jwt.sign({
        _id:this._id,
        email:this.email,
    },process.env.SECRET,{expiresIn:"1d"})
}
const userModel= mongoose.model('Users', userSchema);

module.exports= userModel
    