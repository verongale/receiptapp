
import {prisma} from "@/lib/prisma";
import { UpdateReceiptInput } from "@/types/UpdateReceiptInput";
import { NextResponse } from "next/server";

export async function PUT(request: Request, {params} : {params : Promise<{id : string}>}){
   try { const {id} = await params; 
    const body : UpdateReceiptInput = await request.json(); 
    const receipt = await prisma.receipt.update(
        {
            where : {
                id : Number(id),
            },
            data : {
                supermarket : body.supermarket,
                date : new Date (body.date),
                total : body.total, 
                discount : body.discount,
                imageUrl : body.imageUrl,
            },
            include: {
                products: true,
            },
        }
    );
    return NextResponse.json(receipt, {status: 200});
}
catch (error){
    console.error("Errore durante l'aggiornamento dello scontrino:", error);
    return NextResponse.json({message: "Errore durante l'aggiornamento dello scontrino"}, {status: 500});  
}}

export async function DELETE( 
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;

        const receipt = await prisma.receipt.delete({
            where: {
                id: Number(id),
            },
        });

        return NextResponse.json(
            { message: "Scontrino eliminato con successo", receipt },
            { status: 200 }
        );

    } catch (error) {
        console.error(
            "Errore durante l'eliminazione dello scontrino:",
            error
        );

        return NextResponse.json(
            { message: "Errore durante l'eliminazione dello scontrino" },
            { status: 500 }
        );
    }
}