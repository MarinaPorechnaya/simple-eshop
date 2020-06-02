import React from 'react'
import { connect } from 'react-redux'
import { checkout } from '../../redux/actions'
import {getTotal, getCartProducts} from '../../redux/combineReducers'
import {Checkout} from './Checkout'
import {IProducts} from "../../interfaces";

interface ProductProps {
    products: IProducts[], total: number, checkout: (products: IProducts[] )=> void
}

const CheckoutContainer: React.FC<ProductProps> = ({ products, total, checkout }) => (
    <Checkout
        products={products}
        total={total}
        onCheckoutClicked={() => checkout(products)} />
)

const mapStateToProps = (state: any) => ({
    products: getCartProducts(state),
    total: getTotal(state)
})

export default connect(
    mapStateToProps,
    { checkout }
)(CheckoutContainer)
