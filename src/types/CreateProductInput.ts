export type CreateProductInput = {
    name: string; 
    unitPrice?: number;
    total: number; 
    quantity: number; 
    codiceIva: string;
    discount?: number;
    
};