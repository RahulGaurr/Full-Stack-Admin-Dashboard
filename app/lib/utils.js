import mongoose from "mongoose"

export const connectToDB = async() => {

    const connection = {};

    try{
        if(connection.isConnected) return;
        const db = await mongoose.connect(process.env.MONGO);
        connection.isConnected = db.connections[0].readyState;
    }
    catch(error){
        throw new Error(error);
    }
};






//import mongoose from "mongoose";

// export const connectToDB = async () => {
//     try {
//         if (mongoose.connection.readyState !== 0) return; // Already connected, return early
//         await mongoose.connect(process.env.MONGO);
//     } catch (error) {
//         console.error("Error connecting to MongoDB:", error);
//         throw new Error("Failed to connect to MongoDB");
//     }
// };
