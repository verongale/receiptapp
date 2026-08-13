import { CreateProductInput } from "@/types/CreateProductInput";
export type CreateReceiptInput= {
    supermarket: string;
    date: string;
    total: number;
    products?: CreateProductInput[];
    discount?: number; 
    imageUrl?: string; 
};