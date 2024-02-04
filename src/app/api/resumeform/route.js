import { NextResponse } from "next/server";
import connectDB from "../../../../db/dbconnection";
import ResumeForm from "../../../../models/resumeform";
import argon2i from "argon2";


export async function POST(req){
    const {fullName,email,mobileNumber} = await req.json();

    try {
        await connectDB();
    
        // const userExist = await ResumeForm.findOne({ email });
    
        // if (userExist) {
        //   return NextResponse.json({ message: 'User already exists!' }, { status: 422});
        // } 
        
        // else {
          const user = new ResumeForm({ fullName, email, mobileNumber });
          const data = await user.save();
          if (data) {
            return NextResponse.json({message:'resume sent'},{ status: 201});
          } else {
            return NextResponse.json({message:'Internal Server Error'},{ status: 500});
          }
        // }
    
    
      } catch (error) {
        return NextResponse.json({error:"500 Internal Server Error: " +error}, {status:500});
      }
}
