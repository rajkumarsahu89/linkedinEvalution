const jwt=require("jsonwebtoken");
const RegistrationModel=require("../model/auth");


const requireLogin=(req,res,next)=>{
    const{authorization}=req.headers;
    if(!authorization){
        return req.status(401).json({error:"Not authorized"});
    } else {
        const token=authorization.replace("Bearer","");
        jwt.verify(token,"linkedin app",(err,data)=>{
            if(err){
                console.log(err);
                returnres.json({error:"you must have loged in"})
            } else {
                const {_id}=data;
                RegistrationModel.findById(_id).then(userData=>{
                    req.user=userData;
                    next()
                })
            }
        })
    }
}


module.exports=requireLogin;