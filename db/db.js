import mongoose from "mongoose";

export const db = async () =>{
    try {
        const link = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Db Connect Successfully ${link.connection.host}`);
    } catch (error) {
        console.log(`Error: ${error.message}`);
        provess.exit(1);
    }
}