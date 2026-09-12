"use client"

import {useState} from "react";
import { createReceipt } from "@/services/receiptService";
import { CreateReceiptInput } from "@/types/CreateReceiptInput";
import { CreateProductInput } from "@/types/CreateProductInput";
import { useRouter } from "next/navigation";

export default function NewReceiptPage() {
    const router = useRouter();
    const [supermarket, setSupermarket] = useState("");
    const [date, setDate] = useState("");
    const [total, setTotal] = useState("");
  
    const [products, setProducts] = useState<CreateProductInput[]>([
        {
            name: "",
            unitPrice: 0,
            total: 0,
            quantity: 0,
            codiceIva: "",
        }

    ]);

    
 async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    
    
    const newReceipt : CreateReceiptInput = {
        supermarket: supermarket,
        date: date,
        total: Number(total),
        products: products,
    
    };

    try {
        await createReceipt(newReceipt);
        console.log("Scontrino salvato");
        router.push("/dashboard");

    } catch (error) {
        console.error("Errore salvataggio:", error);
    }
}
async function handleAddProduct(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setProducts([...products, { name: "", unitPrice: 0, total: 0, quantity: 0, codiceIva: "" }]);
}
    return (
        <div>
            <h1>Inserisci un nuovo scontrino</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Supermercato:</label>
                    <input
                    type="text"
                    value={supermarket}
                    onChange={(e) => setSupermarket(e.target.value)}/>
                </div>
                <div>
                    <label>Data:</label>
                    <input 
                    type ="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}/>
                </div>
                <div>
                    <label>Totale:</label>
                    <input
                    type="number"
                    value={total}
                    onChange={(e) => setTotal(e.target.value)}/>
                </div>
                <div>
                    <h2>Prodotti</h2>
                    {products.map((product, index) => (
                        <div key={index}>
                            <label>Nome:</label>
                            <input
                            type="text"
                            value={product.name}
                            onChange={(e) => {
                                const newProducts = [...products];
                                newProducts[index].name = e.target.value;
                                setProducts(newProducts);
                            }}/>
                            <label>Prezzo unitario:</label>
                            <input
                            type="number"
                            value={product.unitPrice}
                            onChange={(e) => {
                                const newProducts = [...products];
                                newProducts[index].unitPrice = Number(e.target.value);
                                setProducts(newProducts);
                            }}/>
                            <label>Quantità:</label>
                            <input
                            type="number"
                            value={product.quantity}
                            onChange={(e) => {
                                const newProducts = [...products];
                                newProducts[index].quantity = Number(e.target.value);
                                setProducts(newProducts);
                            }}/>
                            <label>Totale:</label>
                            <input
                            type="number"
                            value={product.quantity * (product.unitPrice || 0)}
                            readOnly
                            />
                            <label>Codice IVA:</label>
                            <input
                            type="text"
                            value={product.codiceIva}
                            onChange={(e) => {
                                const newProducts = [...products];
                                newProducts[index].codiceIva = e.target.value;
                                setProducts(newProducts);
                            }}/>
                        </div>
                    ))}
                    <button type="button" className="cursor-pointer" onClick={handleAddProduct}>Aggiungi prodotto + </button>
                </div>
                <button type="submit" >Salva</button>
            </form>
        </div>
    )
    }