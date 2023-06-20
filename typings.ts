export interface Product {
    name: string;
    idName: string;
    price: number;
    image: string;
    desc: string;
    korName?: string;
    korDesc?: string;
}

export interface ProductInCart extends Product {
    quantity: number;
    totalItemPrice: number;
}

export interface State {
    products: Product[];
    total: number;
    langEng: boolean;
}

export interface Action {
    type: string;
    payload?: State;
}