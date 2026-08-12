export type Product = {
    id: number; 
    name: string; 
    unitPrice: number;
    total: number; 
    quantity: number; 
    codiceIva: string;
    discount?: number; 
}