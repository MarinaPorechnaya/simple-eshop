import shop from '../api/shop'
import * as types from './constants'
import {SET_CURRENT_PAGE} from "./constants";

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

const filterByCategoryUnsafe = (categoryId, totalItemsCount) => ({
    type: types.FILTER_BY_CATEGORIES,
    categoryId, totalItemsCount
})
/*
export const filterProductsByCategory = categoryId => (dispatch) => {
    dispatch(filterByCategoryUnsafe(categoryId))
}*/
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

export const filterByCategory = (categoryId, totalItemsCount) => (dispatch) => {
    dispatch(filterByCategoryUnsafe(categoryId, totalItemsCount))
}


//---------------------------End CATEGORIES----------------
/*
export const getAllProducts = (products) => dispatch => {
    dispatch(getAllItems(products))
}

const receiveProducts = products => ({
    type: types.RECEIVE_PRODUCTS,
    products
})

export const getAllProducts = () => dispatch => {
    shop.getProducts(products => {
        dispatch(getAllItems(products.products))
    })
}*/

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
//----- ?
/*
const onCategoryChangedUnsafe = totalItemsCount => ({
    type: types.SET_CURRENT_ITEMS_COUNT_IN_CATEGORY,
    totalItemsCount
})

export const onCategoryChanged = totalItemsCount => (dispatch) => {
    dispatch(onPageChangedUnsafe(totalItemsCount))
}*/
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
/*
const receiveCategories = categories => ({
    type: types.RECEIVE_CATEGORIES,
    categories
})

export const getAllCategories = () => dispatch => {
    shop.getCategories(categories => {
        dispatch(receiveCategories(categories))
    })
}

const receiveFilteredCategories = categories => ({
    type: types.FILTER_BY_CATEGORIES,
    categories
})

export const filterByCategory = categories => dispatch => {
        dispatch(receiveFilteredCategories(categories))
}*/

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