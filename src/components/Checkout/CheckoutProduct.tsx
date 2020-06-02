import React from 'react'
import s from "./Checkout.module.scss";

interface CheckoutProductProps {
    price: number, quantity: number, title: string
}

const CheckoutProduct: React.FC<CheckoutProductProps> = ({ price, quantity, title }) => (
    <div className={s.products_list__innerli}>
        <div className={s.products_list__innerli_title}>{title}</div>
        <div className={s.products_list__innerli_quantity}>{quantity ? ` ${quantity} шт` : null}</div>
        <div className={s.products_list__innerli_price}>{price} руб.</div>
    </div>
)

export default CheckoutProduct
