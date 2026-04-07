export interface IProduct {
    name: string;
    id: number;
    price: number;
    created_at: string;
}

export type ProductCreate = Pick<IProduct, 'name'|'price'>