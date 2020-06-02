import React from 'react'
import CatalogProduct from './CatalogProduct'
import s from "./ItemsList.module.scss";
import {IProducts} from "../../../interfaces";

interface ProductItemProps {
    onAddToCartClicked(): void
    product: IProducts
}

const ProductCatalogItem: React.FC<ProductItemProps> = ({ product, onAddToCartClicked}) => (
    <figure className={s.product__item}>
        <CatalogProduct
            title={product.title}
            price={product.price}
            img={product.img}
            id={product.id}
            categoryId={[1]}
            quantity={2}/>
        <button className={s.product__btn}
            onClick={onAddToCartClicked}>
            {'В корзину'}
        </button>
    </figure >


)
export default ProductCatalogItem