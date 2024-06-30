import { ConnectDb } from "@/app/helper/db";
import { cart } from "@/app/models/cartmodel";
import { NextResponse } from "next/server";

ConnectDb();

export async function POST(request) {
  // Fetch user details from request
  const { userid, productid } = await request.json();

  try {
    // Check if the cart already exists
    const existingCart = await cart.findOne({ userid, productid });

    if (existingCart) {
      return NextResponse.json(
        {
          message: "Cart already exists",
          status: true,
        },
        {
          status: 201,
        }
      );
    }

    // Create new cart object
    const newcart = new cart({
      userid,
      productid,
    });

    // Save the object to the database
    const creatednewcart = await newcart.save();

    return NextResponse.json(creatednewcart, {
      status: 201,
    });
  } catch (error) {
    
    return NextResponse.json(
      {
        message: "Failed to add product",
        status: false,
      },
      {
        status: 500,
      }
    );
  }
}
