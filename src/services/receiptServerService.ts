import { Receipt } from "@/types/receipt";
import { prisma } from "@/lib/prisma";




export async function getReceiptById(id : number) : Promise <Receipt | undefined> {
    const response = await prisma.receipt.findUnique({
        where : {
            id : id,
        },
        include : {
            products : true,

        },
    });
    if (!response) {
        return undefined;
    }
    return {
        ...response,
        date: response.date.toISOString(),
        discount: response.discount ?? undefined,
        products: response.products.map((product) => ({
            ...product,
            discount: product.discount ?? undefined,
        })),
    };
}



export async function getReceipts() : Promise<Receipt[]> {
    const response = await prisma.receipt.findMany({
        include : {
            products : true,
        },
    });

    return response.map((receipt) => ({
        ...receipt,
        date: receipt.date.toISOString(),
        discount: receipt.discount ?? undefined,
        products: receipt.products.map((product) => ({
            ...product,
            discount: product.discount ?? undefined,
        })),
    }));
}