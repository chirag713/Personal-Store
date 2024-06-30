
import { ConnectDb } from "@/app/helper/db";
import { User } from "@/app/models/usermodel";
import { NextResponse } from "next/server";

ConnectDb();

export async function POST(request) {
    const { email, password } = await request.json();

    try {
        const user = await User.findOne({ email: email });

        if (!user) {
            return NextResponse.json({
                message: "User not found",
                success: false
            }, {
                status: 404
            });
        }
        const response=NextResponse.json({
            message:"login success",
            success:true,
            user:user,
        })

        return response 

    } catch (error) {
        return NextResponse.json({
            message: error.message,
            success: false
        }, {
            status: 500
        });
    }
}


