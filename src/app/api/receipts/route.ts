import { prisma } from "@/lib/prisma";
import { CreateReceiptInput } from "@/types/CreateReceiptInput";
import { NextResponse } from "next/server";



export async function POST(request: Request){
    try{
    const body : CreateReceiptInput = await request.json();
    console.log("Ricevuto nuovo scontrino:", body);
    const receipt = await prisma.receipt.create({
        data : {
            supermarket : body.supermarket,
            date : new Date (body.date),
            total : body.total, 
            discount : body.discount,
            imageUrl : body.imageUrl,
            products : {
                create : body.products?.map((product)=>({
                    name: product.name,
                    unitPrice: product.unitPrice,
                    total: product.total,
                    quantity: product.quantity,
                    codiceIva: product.codiceIva,
                    discount: product.discount,

                })) ?? [],
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

