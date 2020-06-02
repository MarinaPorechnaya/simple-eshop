import React from 'react';
import s from "../Cart/Cart.module.scss";
import CheckoutProduct from "./CheckoutProduct";
import {NavLink} from "react-router-dom";
import {IProducts} from "../../interfaces";

interface CheckoutProps {
    onCheckoutClicked(): void
    products: IProducts[]
    total: number
}

export const Checkout: React.FC<CheckoutProps> = ({ products, total, onCheckoutClicked }) => {
    const hasProducts = products.length > 0
    const nodes =
        products.map(product =>
            <li><CheckoutProduct
                title={product.title}
                price={product.price}
                quantity={product.quantity}
                key={product.id}
            /></li>
        )
    return(
        <>
            <h2> Оформить заказ </h2>
            <br />
            {hasProducts &&
            <>
                <div className={s.products_list}><ol className={s.products_list__ol}>{nodes}</ol></div>
                <p>Сумма заказа: {total} руб.</p>
                <form>
                    <input value={"ФИО"}/><br />
                    <input value={"Телефон"}/><br />
                    <input value={"E-mail"}/><br />
                    <input value={"Адрес"}/><br />
                    <input value={"Дата"}/><br />
                    <input value={"Время"}/><br />
                    <NavLink id={"3"} to={"/checkout"}><button onClick={onCheckoutClicked}>Заказать</button></NavLink>
                </form>
            </>}
            {!hasProducts && <em>Заказ оформлен. Спасибо за ваш выбор!</em>}
        </>
    )
}