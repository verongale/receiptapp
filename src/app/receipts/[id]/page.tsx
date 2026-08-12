
import { getReceiptById } from "@/services/receiptServerService";
import ProductCard from "@/components/products/ProductCard";
export default async function ReceiptPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    const receipt = await getReceiptById(Number(id));   

    console.log("Scontrino trovato:", receipt);

    if (!receipt) {
        return <div>Scontrino non trovato</div>;
    }
    return (
        <div> 
            <h1 className="text-2xl font-bold">Pagina di dettaglio scontrino ID: {id}</h1>
            <p>Supermercato: {receipt.supermarket}</p>
            <p>Data: {receipt.date}</p>
            <p>Totale: {receipt.total}</p>
             <div className="mt-4">
                {receipt.products.map((product) => (
                    <ProductCard
                    key={product.id}
                    product={product}
                    />
                ))}
             </div>
        </div>
    );
}