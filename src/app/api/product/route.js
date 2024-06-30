
import { ConnectDb } from "@/app/helper/db";
import { Product } from "@/app/models/productmodel";
import { NextResponse } from "next/server";

ConnectDb();

export async function POST(request) {


    // fetch user detail from request


    const { description, name, price, usedfor, img_path } = await request.json();

    // create user object with user model

    const newproduct = new Product({
        description,
        name,
        price,
        usedfor,
        img_path
    })

    try {
        // save the object to database 
        const creatednewproduct = await newproduct.save();

        const response = NextResponse.json(
            newproduct,
            {
                status: 201,
            }
        )


        return response;
    }
    catch (error) {
        
        return NextResponse.json({
            message: "Failed to create product",
            status: false
        }, {
            status: 500,
        })
    }
}