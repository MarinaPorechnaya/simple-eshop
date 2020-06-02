import React from 'react'
import s from "./Cart.module.scss";
import {IProducts} from "../../interfaces";

type ProductProps = CBProps & IProducts

type CBProps = {
    onAddToCartClicked(): void
    onDeleteFromCartClicked():void
    onMinusFromCartClicked():void
}

const Product: React.FC<ProductProps> = ({ price, quantity, title, onAddToCartClicked, onMinusFromCartClicked, onDeleteFromCartClicked }) => (
    <div className={s.products_list__innerli}>
        <div className={s.products_list__innerli_title}>{title}</div>
        <div className={s.products_list__innerli_button}><button onClick={onMinusFromCartClicked}>-</button></div>
        <div className={s.products_list__innerli_quantity}>{quantity} шт</div>
        <div className={s.products_list__innerli_button}><button onClick={onAddToCartClicked}>+</button></div>
        <div className={s.products_list__innerli_price}>{price*quantity} руб.</div>
        <div className={s.products_list__innerli_button}><button onClick={onDeleteFromCartClicked}>x</button></div>
    </div>
)

export default Product
