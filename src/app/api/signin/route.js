import { NextResponse } from "next/server";
import connectDB from "../../../../db/dbconnection";
import User from "../../../../models/users";
import argon2i from "argon2";
import jwt from "jsonwebtoken";

export async function POST(req){
    const {email,password} = await req.json();
    try {
        if(!email || !password){
            return NextResponse.json({ error: 'Required Fields..."' }, { status: 400});
        }
        await connectDB();
       
        const userFound = await User.findOne({email});

        if(!userFound){
            return NextResponse.json({message:"User not registered"}, {status:400});
        }
        else{
            const passMatch = await argon2i.verify(userFound.password,password);
            if(!passMatch){
                return NextResponse.json({message:'User ID or Password are incorrect'}, {status:400});
            }
            else{
                const token = jwt.sign(
                    { id: userFound._id, first_name: userFound.first_name, last_name:userFound.lname},
                    process.env.TOKEN_SECRET_KEY,
                    { expiresIn: "30m" }
                  );
                  const userdata = { id: userFound._id, first_name: userFound.first_name, last_name:userFound.last_name};
                return NextResponse.json({message:'login success',token,userdata},{ status: 200});
            }
        }

    } catch (error) {
        console.log('signin api exception:',error);
        return NextResponse.json({error:"500 Internal Server Error: " +error}, {status:500});
    }
}