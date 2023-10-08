interface Products {
    p_id: number,
    p_name: string,
    isHot: boolean,
    isCold: boolean,
    isFrappe: boolean,
    p_typeId: number,
    p_type: ProductType
}

interface ProductType {
    typeId: number,
    typeName: string
}

export type CafeProducts = Products[];

