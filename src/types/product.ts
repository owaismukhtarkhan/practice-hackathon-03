export interface Product {
    _id: string;
    name: string;
    _type: "product";
    image: {
        asset: {
            _ref: string;
            _type: "image";
        };
    };
    price: number;
    description?: string;
    category: "tshirt" | "short" | "jeans" | "hoodie" | "shirt";
    discountPercent?: number;
    new?: boolean;
    colors?: string[];
    sizes?: string[];
}
