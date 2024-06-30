import { ConnectDb } from "@/app/helper/db";
import { getresponsemessage } from "@/app/helper/responsemessage";
import { Name } from "@/app/models/namemodel";
import { NextResponse } from "next/server";

ConnectDb();

export async function GET(request, { params }) {
    const { usedfor } = params;

    if (!usedfor) {
        return getresponsemessage("Parameter 'usedfor' is required", 400, false);
    }

    try {
        const names = await Name.find({ usedfor });
        return NextResponse.json(names);
    } catch (error) {
       
        return getresponsemessage("Failed to get names", 404, false);
    }
}
