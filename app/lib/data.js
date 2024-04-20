// data.js

import { Users } from "./models";
import { connectToDB } from "./utils";

export const fetchUsers = async () => {
    try {
        await connectToDB(); // Ensure connection is established
        console.log("Connection to MongoDB successful...");

        const users = await Users.find();
        console.log("Fetched users:", users); // Log fetched users

        return users;
    } catch (error) {
        console.error("Error fetching users:", error);
        throw new Error("Failed to fetch users!");
    }
}; 

