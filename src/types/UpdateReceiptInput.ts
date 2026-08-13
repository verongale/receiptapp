import { CreateProductInput } from "@/types/CreateProductInput";
export type UpdateReceiptInput= {
    supermarket: string;
    date: string;
    total: number;
    products?: CreateProductInput[];
    discount?: number; 
    imageUrl?: string;
};