export interface PaginationMeta {
    page: number;
    take: number;
    total: number;
}

export interface PageableResponse<T> {
    data: T[]; //T (generics) yg akan mewakili interface blog itu
    meta: PaginationMeta;
}