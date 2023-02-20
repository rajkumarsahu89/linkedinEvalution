const express=require("express");
const dbConnection=require("./config/database");
const router=require("./routes/allRoutes");
const app=express();
const PORT=8080;
const cors=require("cors");



app.use(cors())
app.use(express.json());
app.use("/",router)



app.listen(PORT, async()=>{
    try{
        await dbConnection;
        console.log("Database connected successfully");
        console.log(`PORT is running on ${PORT}`);
    }
    catch(error){
        console.log(`error:${error}`);
        console.log("Database not connected");
    }
})