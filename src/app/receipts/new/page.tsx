"use client"

import {useState} from "react";
import { createReceipt } from "@/services/receiptService";
export default function NewReceiptPage() {
    const [supermarket, setSupermarket] = useState("");
    const [date, setDate] = useState("");
    const [total, setTotal] = useState("");
    
 async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    const newReceipt = {
        supermarket,
        date,
        total: Number(total),
        products: [],
        id: Date.now()
    };

    try {
        await createReceipt(newReceipt);
        console.log("Scontrino salvato");
    } catch (error) {
        console.error("Errore salvataggio:", error);
    }
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
                <button type="submit" >Salva</button>
            </form>
        </div>
    )
    }