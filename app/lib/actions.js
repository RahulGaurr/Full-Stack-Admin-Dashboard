"use server"

import { Users,Products } from "./models";
import { connectToDB } from "./utils";
import bcrypt from "bcrypt"
import { redirect } from "next/navigation";

const addUser = async (formData) => {
  
    const {username, email, password, phone, address, isAdmin, isActive} = Object.fromEntries(formData);

  try {
    connectToDB();

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password,salt);


    const newUser = new Users({
        username,
        email,
        password:hashedPassword,
        phone,
        address,
        isAdmin,
        isActive
    })
    await newUser.save();
    
  } catch (error) {
    console.log(error)
    throw new Error("Failed to create User")
  }
    redirect("/dashboard/users")
}


export const addProduct = async(formData) => {
    const {title,desc,price,stock,color,size} = Object.fromEntries(formData);

    try{
        connectToDB();

        const newProduct = new Products({
            title,
            desc,
            price,
            stock,
            color,
            size
        });

        await newProduct.save();
    } catch(err){
        console.log(err)
        throw new Error("Failed to create Product")
    }
}

export default addUser;