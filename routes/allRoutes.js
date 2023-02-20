
const express=require("express");
const{register,login}=require("../controller/auth");
const {addPosts,getPosts,updatePost,deletePost}=require("../controller/linkedin");
const requireLogin=require("../middleware/requiureLogin");
const router=express.Router();




router.post("/register",register);
router.post("/login",login);



router.use(requireLogin);
router.get("/",getPosts);
// router.get("/:_id",)
router.post("/createpost",addPosts);
router.patch("/updatepost/:_id",updatePost);
router.delete("/deletepost/:_id",deletePost);



module.exports=router;