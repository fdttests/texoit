export default interface PaginatedResponse<T> {
    content: Array<T>;
    pageable: {
        sort: {
            sorted: boolean;
            unsorted: boolean;
        };
        pageSize: number;
        pageNumber: number;
        offset: number;
        paged: boolean;
        unpaged: boolean;
    };
    totalElements: number;
    last: number;
    totalPages: number;
    first: boolean;
    sort: {
        sorted: boolean;
        unsorted: boolean;
    };
    number: number;
    numberOfElements: number;
    size: number;
}
