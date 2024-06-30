import { ConnectDb } from "@/app/helper/db";
import { Name } from "@/app/models/namemodel";
import { NextResponse } from "next/server";

ConnectDb();

export async function POST(request) {
    // Fetch user detail from request
    const { name, usedfor } = await request.json();

    try {
        // Check if the name and usedfor already exist
        const existingName = await Name.findOne({
            name:name,
            usedfor:usedfor
        });

        if (existingName) {
            return NextResponse.json({
                message: "Name with the specified usage already exists",
                status: true
            }, {
                status: 201, // Conflict
            });
        }

        // Create user object with user model
        const newproductname = new Name({
            name,
            usedfor,
        });

        const creatednewproductname = await newproductname.save();
        const response = NextResponse.json(
            creatednewproductname,
            {
                status: 201,
            }
        );

        return response;
    } catch (error) {
        
        return NextResponse.json({
            message: "Failed to create product name",
            status: false
        }, {
            status: 500,
        });
    }
}
