

import { ConnectDb } from "@/app/helper/db";
import { getresponsemessage } from "@/app/helper/responsemessage";
import { Product } from "@/app/models/productmodel";
import { NextResponse } from "next/server";

ConnectDb()




export async function GET(request , {params}){
    const {usedby , type}=params;

    try{

        const tasks=await Product.find({
           usedfor:usedby,
           name:type
        })

        return NextResponse.json(tasks);

    }catch(error){
     
        return getresponsemessage("Failed to get tasks" , 404 , false);
    }
}