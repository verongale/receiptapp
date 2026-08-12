import { Product } from "@/types/product";

type ProductCardProps = {
    product: Product;
};

export default function ProductCard(props: ProductCardProps) {
    return (
        <div className="border-b py-2">
            <div className="flex justify-between">
                <p>{props.product.name}</p>
                <p>
                    {props.product.total.toFixed(2)} €
                </p>
            </div>

            <div className="flex justify-between text-sm text-gray-600">
                <p>
                    {props.product.quantity} x {props.product.unitPrice.toFixed(2)} €
                </p>

                <p>
                    {props.product.codiceIva}
                </p>
            </div>

            {props.product.discount !== undefined && (
                <div className="flex justify-between text-sm">
                    <p>Sconto</p>
                    <p>
                        -{props.product.discount.toFixed(2)} €
                    </p>
                </div>
            )}
        </div>
    );
}