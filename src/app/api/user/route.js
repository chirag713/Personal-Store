import { ConnectDb } from "@/app/helper/db";
import { User } from "@/app/models/usermodel";
import { NextResponse } from "next/server";

ConnectDb();

export async function POST(request) {



    // fetch user detail from request


    const { name, email, password } = await request.json();

    // create user object with user model

    const newuser = new User({
        name,
        email,
        password,
    })

    try {
        // save the object to database 
        const creatednewuser = await newuser.save();

        const response = NextResponse.json(
            newuser,
            {
                status: 201,
            }
        )

        return response;
    }
    catch (error) {
        return NextResponse.json({
            message: "Failed to create user",
            status: false
        }, {
            status: 500,
        })
    }
}