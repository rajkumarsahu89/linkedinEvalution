const mongoose=require("mongoose");


const linkedinSchema=mongoose.Schema({
    title : String,
body : String,
device : String,
no_if_comments : Number

})


const linkedinModel=mongoose.model("post", linkedinSchema);


module.exports=linkedinModel;