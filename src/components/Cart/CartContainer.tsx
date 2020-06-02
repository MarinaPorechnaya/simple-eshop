import React from 'react'
import { connect } from 'react-redux'
import {addToCart, checkout, minusFromCart, deleteFromCart} from '../../redux/actions'
import {getTotal, getCartProducts} from '../../redux/combineReducers'
import Cart from './Cart'
import {IProducts} from "../../interfaces";

interface ProductProps {
    products: IProducts[], total: number, checkout: (products: IProducts[] )=> void,
    addToCart(id:number): void
    minusFromCart(id:number): void
    deleteFromCart(id:number): void
}

const CartContainer: React.FC<ProductProps> = ({ products, total, checkout, addToCart, minusFromCart, deleteFromCart }) => (
    <Cart
        products={products}
        total={total}
        onCheckoutClicked={() => checkout(products)}
        addToCart={addToCart}
        deleteFromCart={deleteFromCart}
        minusFromCart={minusFromCart}/>
)

const mapStateToProps = (state: any) => ({
    products: getCartProducts(state),
    total: getTotal(state)
})

export default connect(
    mapStateToProps,
    { checkout, addToCart, minusFromCart, deleteFromCart }
)(CartContainer)
