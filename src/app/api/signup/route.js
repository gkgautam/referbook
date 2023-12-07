import { NextResponse } from "next/server";
import connectDB from "../../../../db/dbconnection";
import User from "../../../../models/users";
import argon2i from "argon2";

export async function POST(req){
    const {first_name,last_name,phone,email,password} = await req.json();

    try {
        await connectDB();
    
        const userExist = await User.findOne({ email });
    
        if (userExist) {
          return NextResponse.json({ error: 'User already exists !' }, { status: 422});
        } 
        
        else {
          const passHash = await argon2i.hash(password);
          const user = new User({ first_name, last_name, email, phone, password:passHash });
          const data = await user.save();
    
          if (data) {
            return new NextResponse('User Added',{ status: 201});
          } else {
            return new NextResponse('Internal Server Error', { status: 500 });
          }
        }
    
    
      } catch (error) {
        return NextResponse.json({error:"500 Internal Server Error: " +error}, {status:500});
      }
}