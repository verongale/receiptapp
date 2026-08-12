import { Receipt } from "@/types/receipt";
import Link from "next/link";

type ReceiptCardProps = {
    receipt: Receipt;
};

export default function ReceiptCard(props: ReceiptCardProps) {

    return (
        <Link href={`/receipts/${props.receipt.id}`}>
            <div className="flex flex-col items-center justify-center w-full h-full bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-800">{props.receipt.supermarket}</h2>
                <p className="text-gray-600">{props.receipt.date}</p>
                <p className="text-gray-600">{props.receipt.total.toFixed(2)} €</p>
               
            </div>
        </Link>
    );
}