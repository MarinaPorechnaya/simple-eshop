import React from 'react'
import s from "./ItemsList.module.scss";
import {IProducts} from "../../../interfaces";

const CatalogProduct: React.FC<IProducts> = ({ price, title, img, id }) => (

    <>
        <img src={img} alt="first" className={s.product__img} />
        <figcaption className={s.product__text}>
            {title}
        </figcaption>
        <div className={s.product__price}>
            {price} руб.
        </div>
    </>
)

export default CatalogProduct
