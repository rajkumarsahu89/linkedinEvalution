const linkedinModel=require("../model/linkedin");


const getPosts=async(req,res)=>{
    try{
        const allPosts=await linkedinModel.find();
        console.log("All posts");
        res.json(allPosts);
    }
    catch(error){
        console.log(error);
        res.json({error:"OPP's somthing went wrong"})
    }
}


const addPosts=async(req,res)=>{
    const payload=req.body;
    try{
        const data=linkedinModel(payload)
        await data.save();
        console.log("Successfully added post");
        res.json({message:"Successfully added post"});
    }
    catch(error){
        console.log(error);
        res.json({error:"OPP's post not added"})
    
    }
}


const updatePost=async(req,res)=>{
  const payload=req.body;
  const {_id}=req.params;
  try{
    await linkedinModel.findByIdAndUpdate({_id},payload)
    console.log("Successfully updated post");
        res.json({message:"Successfully updated post"});
    }
    catch(error){
        console.log(error);
        res.json({error:"OPP's post not update"})
  }
}

const deletePost=async(req,res)=>{
    const{_id}=req.params;
    try{
        await linkedinModel.findByIdAndDelete({_id})
        console.log("Successfully deleted post");
        res.json({message:"Successfully deleted post"});
    }
    catch(error){
        console.log(error);
        res.json({error:"OPP's post not deleted"})
    }
}


module.exports={getPosts,addPosts,updatePost,deletePost}