export interface IProducts {
    id: number
    title: string
    price: number
    img: string
    categoryId: Array<number>
    quantity: number
}
export interface ICategories {
    id: number
    title: string
    img: string
    parentId: number
}

