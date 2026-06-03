interface PaginationQuery {
    page?: number;
    limit?: number;
}

interface PaginateResult {
    skip: number;
    take: number;
}

export function paginate(query: PaginationQuery): PaginateResult {
    const page = Math.max(1, query.page ?? 1);
    const take = Math.min(100, Math.max(1, query.limit ?? 20));
    const skip = (page - 1) * take;
    return { skip, take };
}

interface PaginatedMeta {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
}

export function paginatedResponse<T>(
    data: T[],
    total: number,
    query: PaginationQuery
): { data: T[]; meta: PaginatedMeta } {
    const page = Math.max(1, query.page ?? 1);
    const limit = Math.min(100, Math.max(1, query.limit ?? 20));
    const totalPages = Math.ceil(total / limit);

    return {
        data,
        meta: {
            total,
            page,
            limit,
            totalPages,
            hasNextPage: page < totalPages,
            hasPrevPage: page > 1,
        },
    };
}
