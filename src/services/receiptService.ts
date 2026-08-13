import { CreateReceiptInput } from "@/types/CreateReceiptInput";
import { Receipt } from "@/types/receipt";

export async function createReceipt(receipt : CreateReceiptInput){
    const response = await fetch("/api/receipts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(receipt)
    });
    if (!response.ok) {
        throw new Error("Failed to create receipt");
    }
    const data = await response.json();
    return data;
}

export async function updateReceipt(id : number, receipt : Receipt){
    const response = await fetch('api/receipts/' + id, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(receipt)
    });
    if (!response.ok) {
        throw new Error("Failed to update receipt");
    }
    const data = await response.json();
    return data;
}

export async function deleteReceipt(id : number){
    const response = await fetch('api/receipts/' + id, {
        method : "DELETE",
    });
    if (!response.ok) {
        throw new Error("Failed to delete receipt");
    }
}

