const bcrypt=require("bcrypt");
const RegistrationModel=require("../model/auth");
const jwt=require("jsonwebtoken");



const register=(req,res)=>{
    const{name,email,gender,password,age,city}=req.body;
    bcrypt.hash(password,8,(err,secured_password)=>{
        if(err){
            console.log(err);
        } else {
            try{
                const userData=RegistrationModel({name,email,gender,password:secured_password,age,city})
                userData.save();
                console.log("Successfully registered");
                res.json({message:"Successfully registered"})
            }
            catch(error){
                console.log(`error:${error}`)
                res.json({error})
            }
        }
    })
}



const login=(req,res)=>{
    const{email,password}=req.body
    RegistrationModel.find({email}).then(userData=>{
        if(!userData){
            res.json({error:"OPP's you are not registered"})
        } else {

            bcrypt.compare(password,userData[0].password,(err,matched_password)=>{
                if(!matched_password){
                    console.log(err);
                    res.json({message:"Password is not matching"})
                } else {
                    const token=jwt.sign(password,"linkedin_app");
                    res.json({"message":"Successfully loged in",token})
                    console.log("Successfully loged in");
                }
            })
        }
    })
}



module.exports={register,login}