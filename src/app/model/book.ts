import { Category } from "./category"

export interface Book {
        id: number
    title: string
    author: string
    img: string 
    category: Category
    is_avaiable: boolean
}
