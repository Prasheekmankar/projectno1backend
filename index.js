import dotenv from "dotenv";
import express from  "express";
import cors from "cors";
import {createConnection} from "./connection.js"
import { bikelistRouter } from "./Routes/bikelist.js";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
export const client = await createConnection();

app.get("/",(req,res)=>{
    res.send("hello bro");
});

app.get("/login",(req,res)=>{
    res.send("loginagain");
});
app.use("/bikelist",bikelistRouter);

 app.listen(process.env.PORT||9000,()=>
     console.log(`listening on port 9000`)
 );
