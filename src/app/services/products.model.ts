interface Products {
    p_id: number,
    p_name: string,
    isHot: string,
    isCold: string,
    isFrappe: string,
    p_type: string
}

export type CafeProducts = Products[];

