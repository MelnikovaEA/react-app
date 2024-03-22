export type EmptyPayload = void;

export type Item = {
    id: number,
    image: string,
    name: string,
    types: ItemType[],
    extraProps: ItemExtraProp[],
    price: number,
    category: string,
    rating: number
    }

export type ItemType = {[key: string]: string};
export type ItemExtraProp = {[key: string]: string};
export type ItemOfCart = {
    hashId: string,
    id: number,
    image: string,
    name: string,
    type: string,
    extProps: string[],
    price: number,
    qty: number,
    totPrice: number
}

export type Prices  = {
    plain: number,
    magic: number,
    clever: number,
    lazy: number,
    strange: number,
};