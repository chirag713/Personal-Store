import { ConnectDb } from "@/app/helper/db";
import { getresponsemessage } from "@/app/helper/responsemessage";
import { Product } from "@/app/models/productmodel";
import { NextResponse } from "next/server";

ConnectDb();

export async function GET(request, { params }) {
    const { productid } = params;

    try {
        const product = await Product.findOne({ _id:productid });
        return NextResponse.json(product);
    } catch (error) {
        return getresponsemessage("Failed to get product", 404, false);
    }
}
