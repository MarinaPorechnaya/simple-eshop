import React from 'react';
import {NavLink} from "react-router-dom";
import s from './Cart.module.scss'
import Product from './Product'
import {IProducts} from "../../interfaces";

interface CartProps {
    onCheckoutClicked(): void
    addToCart(id: number): void
    minusFromCart(id: number): void
    deleteFromCart(id: number): void
    products: IProducts[]
    total: number
}

const Cart: React.FC<CartProps>  = ({ products, total, onCheckoutClicked, addToCart, minusFromCart, deleteFromCart }) => {
    const hasProducts = products.length > 0
    const nodes = hasProducts ? (
        products.map(product =>
            <li><Product
                id={product.id}
                img={product.img}
                categoryId={product.categoryId}
                title={product.title}
                price={product.price}
                quantity={product.quantity}
                key={product.id}
                onAddToCartClicked = {() => addToCart(product.id)}
                onMinusFromCartClicked = {() => minusFromCart(product.id)}
                onDeleteFromCartClicked = {() => deleteFromCart(product.id)}
            /></li>
        )
    ) : (
        <em><NavLink id={"1"} to={"/"}>Продолжить покупки</NavLink></em>
    )

    return (
        <>
            <h2> Корзина </h2>
            <br />
            <div className={s.products_list}><ol className={s.products_list__ol}>{nodes}</ol></div>
            <p>Сумма заказа: {total} руб.</p>
            <br />
            <NavLink id={"3"} to={"/checkout"}>
                <button>
                Оформить заказ
            </button></NavLink>

        </>
    )
}


export default Cart
