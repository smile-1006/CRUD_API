import { deletePOST, getById, updatePOST } from "@/lib/data";
import { NextResponse } from "next/server";


export const GET = async (req: Request) => {
    try{
        const id = req.url.split("blogs/")[1];
        const post = getById(id)
        if (!post ){
            return NextResponse.json({message : "Not Found"},{status:404});
        }
        return NextResponse.json({message : "OK",post},{status:200});
    }catch(error){
        return NextResponse.json(
            {message : "Error" , error},
            {
                status:500,
            }
        );
    }
};

export const PUT = async (req: Request) => {
    //PUT a post by id from the database
    try{
        const {title,desc }= await req.json();
        const id = req.url.split("blogs/")[1];
        updatePOST(id,title,desc)
        return NextResponse.json({message:"OK"},{status:200});
    }catch(error){
        return NextResponse.json({message:"ERROR",error},{status:500})
    }

};

export const DELETE = async (req: Request) => {
    try{
        
        const id = req.url.split("blogs/")[1];
        deletePOST(id)
        return NextResponse.json({message:"OK"},{status:200});
    }catch(error){
        return NextResponse.json({message:"ERROR",error},{status:500})
    }
};