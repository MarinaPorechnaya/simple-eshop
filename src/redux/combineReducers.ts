import { combineReducers } from 'redux'
import cart, * as fromCart from './cartReducer'
import products, * as fromProducts from './productsReducer'
import categories from './catalogRducer'
import {FILTER_BY_CATEGORIES} from "./constants";

const filterId = (state: any = 0, action: any) => {
    switch (action.type) {
        case FILTER_BY_CATEGORIES: {
            return action.categoryId
        }
        default:
            return state
    }
}


export default combineReducers({
    cart,
    products,
    categories,
   filterId
})

//type RootReducerType = typeof combineReducers
//export type AppStateType = ReturnType<RootReducerType>

const getAddedIds = (state: any) => fromCart.getAddedIds(state.cart)

const getQuantity = (state: any, id: number) => fromCart.getQuantity(state.cart, id)

const getProduct = (state: any, id: number) => fromProducts.getProduct(state.products, id)

const getVisibleProducts = (state: any) => fromProducts.getVisibleProducts(state)

export const getFilterId = (state: any) =>
    state.filterId

export const getTotal = (state: any) =>
    getAddedIds(state)
        .reduce((total: number, id: number) =>
            total + getProduct(state, id).price * getQuantity(state, id),
            0
        )
        .toFixed(2)

export const getCnt = (state: any) =>
    getAddedIds(state)
        .reduce((cnt: number, id: number) =>
            cnt + getQuantity(state, id),
            0
        )

export const getCartProducts = (state: any) =>
    // @ts-ignore
    getAddedIds(state).map(id => ({
        ...getProduct(state, id),
        quantity: getQuantity(state, id)
    }))
