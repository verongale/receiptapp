import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";



export async function POST(request: Request){
    try{
    const body = await request.json();
    console.log("Ricevuto nuovo scontrino:", body);
    const receipt = await prisma.receipt.create({
        data : {
            supermarket : body.supermarket,
            date : new Date (body.date),
            total : body.total, 
            discount : body.discount,
            imageUrl : body.imageUrl,
            products : {
                create : []
            },
            
        },
         include: {
                products: true,
            },
    });
   
    return NextResponse.json(receipt, {status: 201});
}
catch (error){
    console.error("Errore durante la creazione dello scontrino:", error);
    return NextResponse.json({message: "Errore durante la creazione dello scontrino"}, {status: 500});  

}
}

