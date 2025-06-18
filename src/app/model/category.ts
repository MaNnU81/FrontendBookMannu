export interface Category {
        id: number
    name: string
}

export type CategoryWithAll = Category & { id: number | null };