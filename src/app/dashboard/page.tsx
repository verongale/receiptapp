import ReceiptCard from "@/components/receipts/ReceiptCard";
import { getReceipts } from "@/services/receiptServerService";


export default async function DashboardPage() {
    const receipts = await getReceipts();
      if (receipts.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center w-full h-full bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-800">
                    Dashboard
                </h2>

                <p className="text-gray-600">
                    Non hai ancora inserito nessuno scontrino.
                </p>
            </div>
        );
    }
    return (
        <div className="flex flex-col items-center justify-center w-full h-full bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800">Dashboard</h2>
            <p className="text-gray-600">Benvenuto nella tua dashboard. Qui puoi gestire le tue attività.</p>
            <div>
                
                {receipts.map((receipt) => (
                    <ReceiptCard 
                    key={receipt.id}
                    receipt={receipt} 
                    />
                ))
                }
            </div>
        </div>
    );
}