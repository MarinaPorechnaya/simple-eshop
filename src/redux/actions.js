import shop from '../api/shop'
import * as types from './constants'

//-------------------------- Products ------------

const receiveProducts = (products) => ({
    type: types.RECEIVE_ITEMS,
    products
})

export const getAllProducts = () => dispatch => {
    shop.getProducts((products)  => {
        dispatch(receiveProducts(products))
    })
}

const filterByCategoryUnsafe = categoryId => ({
    type: types.FILTER_BY_CATEGORIES,
    categoryId
})
//---------------------------END Products----------------
//---------------------------CATEGORIES---------------
const receiveCategories = categories => ({
    type: types.RECEIVE_CATEGORIES,
    categories
})

export const getAllCategories = () => dispatch => {
    shop.getCategories(categories => {
        dispatch(receiveCategories(categories))
    })
}

export const filterByCategory = categoryId => (dispatch) => {
    dispatch(filterByCategoryUnsafe(categoryId))
}

//---------------------------End CATEGORIES----------------

const addToCartUnsafe = productId => ({
    type: types.ADD_TO_CART,
    productId
})

export const addToCart = productId => (dispatch, getState) => {
        dispatch(addToCartUnsafe(productId))
}

//------------Pagination----------------
const onPageChangedUnsafe = currentPage => ({
    type: types.SET_CURRENT_PAGE,
    currentPage
})

export const onPageChanged = currentPage => (dispatch) => {
        dispatch(onPageChangedUnsafe(currentPage))
}
//-------------END Pagination -------
const deleteFromCartUnsafe = productId => ({
    type: types.DELETE_PRODUCT,
    productId
})

export const deleteFromCart = productId => (dispatch, getState) => {
        dispatch(deleteFromCartUnsafe(productId))
}

const minusFromCartUnsafe = productId => ({
    type: types.MINUS_PRODUCT,
    productId
})

export const minusFromCart = productId => (dispatch, getState) => {
    dispatch(minusFromCartUnsafe(productId))
}
//---------------------------End CART----------------

export const checkout = products => (dispatch, getState) => {
    const { cart } = getState()

    dispatch({
        type: types.CHECKOUT_REQUEST
    })
    shop.buyProducts(products, () => {
        dispatch({
            type: types.CHECKOUT_SUCCESS,
            cart
        })
    }, 100)
}