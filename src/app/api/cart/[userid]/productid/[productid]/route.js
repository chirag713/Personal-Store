import { ConnectDb } from "@/app/helper/db";
import { cart } from "@/app/models/cartmodel";
import { NextResponse } from "next/server";

ConnectDb();

export async function DELETE(request, { params }) {
    // Extract userid and productid from params
    const { userid, productid } = params;

    try {
        // Check if the cart item exists

        // If it exists, delete it
        await cart.deleteOne({ userid, productid });

        return NextResponse.json(
            {
                message: "Cart item deleted successfully",
                status: true,
            },
            {
                status: 200,
            }
        );

    } catch (error) {
        // Handle any errors
        return NextResponse.json(
            {
                message: "Failed to delete cart item",
                status: false,
            },
            {
                status: 500,
            }
        );
    }
}
