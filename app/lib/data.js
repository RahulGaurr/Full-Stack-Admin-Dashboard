// data.js

import { Users, Products } from "./models";
import { connectToDB } from "./utils";

export const fetchUsers = async () => {
    try {
        await connectToDB(); // Ensure connection is established
        console.log("Connection to MongoDB successful.");

        const users = await Users.find();
        console.log("Fetched users:", users); // Log fetched users

        return users;
    } catch (error) {
        console.error("Error fetching users:", error);
        throw new Error("Failed to fetch users!");
    }
}; 


export const fetchUser = async(id)=>{
    try{
        connectToDB()
        const user = await Users.findById(id);
        return user;
    }catch(err){
        console.log(err)
        throw new Error("Failed to fetch users!")
    }
}



export const fetchProducts = async()=>{
    try{
        connectToDB()
        const products = await Products.find();
        return products
    }catch(err){
        console.log(err)
        throw new Error("Failed to fetch products!")
    }
}



