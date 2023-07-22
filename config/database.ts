import mongoose from "mongoose"
// import dotenv from "dotenv"

const URL: string = process.env.DB_STRING!;

export const database = () => {
    try {
        mongoose.connect(URL).then(()=>{
            console.log("");
            console.log("connected🍡🍡🍡");
        });
    } catch (error) {
        console.log(error);
        
    }
}