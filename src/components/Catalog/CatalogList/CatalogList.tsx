import React from 'react'
import s from './CatalogList.module.scss'
import Category from "./Category";
import {ICategories} from "../../../interfaces";

type CatalogListType = {
    filterByCategory(id: number): void
    categories: ICategories[]
}
export const CatalogList: React.FC<CatalogListType> = ({categories, filterByCategory}) => {
    const hasCategories = categories.length > 0
    const nodes = hasCategories ? (
        categories.map(category =>
            <Category
                id={category.id}
                title={category.title}
                img={category.img}
                parentId={category.parentId}
                onFilterByCategoryClicked = {() => filterByCategory(category.id)}
            />
        )
    ) : (
        null
    )
    return (
        <div className={s.catalog_block} >
            {nodes}
        </div>
    )
}