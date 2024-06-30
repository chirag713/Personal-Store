import { ConnectDb } from "@/app/helper/db";
import { getresponsemessage } from "@/app/helper/responsemessage";
import { cart } from "@/app/models/cartmodel";
import { NextResponse } from "next/server";

ConnectDb();

export async function GET(request, { params }) {
    const { userid } = params;

    try {
        const names = await cart.find({ userid });
        return NextResponse.json(names);
    } catch (error) {
       
        return getresponsemessage("Failed to get cart", 404, false);
    }
}
