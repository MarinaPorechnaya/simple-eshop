import React from 'react'
import s from "./CatalogList.module.scss";
import {ICategories} from "../../../interfaces";

type CategoryType = ICategories & CBType
type CBType = {
    onFilterByCategoryClicked(): any
}

const Category: React.FC<CategoryType> = ({  id, title, img, onFilterByCategoryClicked }) => (
    <div onClick={onFilterByCategoryClicked} className={s.catalog_block__item} key={id}>
            <img className={s.catalog_block__img} src={img} alt={"cat"}/>
            <h4>{title}</h4>
    </div>
)

export default Category
