import { Product } from "@/types/product";
export type Receipt = {
    id: number;
    supermarket: string;
    date: string;
    total: number;
    products: Product[];
    discount?: number; 
};