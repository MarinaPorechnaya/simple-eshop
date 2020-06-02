import { combineReducers } from 'redux'
import {ADD_TO_CART, RECEIVE_ITEMS, SET_CURRENT_PAGE} from './constants'
import {IProducts} from "../interfaces";

type HelpersType = {
    type: typeof RECEIVE_ITEMS
    products: IProducts[]
    productId: number
    categoryId: number
}

type ProductsType = {
    products:  IProducts[]
    type: typeof ADD_TO_CART
}

type CurrentPageType = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}

type ActionsType = HelpersType | ProductsType | CurrentPageType

let initialState = {
    pageSize: 4,
    currentPage: 1,
};

const products = (state: any = initialState, action: ActionsType) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                products: action.products
            }
        default:
            return state
    }
}
const setPagination = (state: any = initialState, action: ActionsType) => {
    switch (action.type) {
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage }
        default:
            return state
    }
}

const byId = (state: any = {}, action: ActionsType) => {
    switch (action.type) {
        case RECEIVE_ITEMS:
            return {
                ...state,
                ...action.products.reduce((obj, product) => {
                    // @ts-ignore
                    obj[product.id] = product
                    return obj
                }, {})
            }
        default:
            // @ts-ignore
            const { productId } = action
            if (productId) {
                return {
                    ...state,
                    [productId]: products(state[productId], action)
                }
            }
            return state
    }
}

const visibleIds = (state: any = [], action: ActionsType) => {
    switch (action.type) {
        case RECEIVE_ITEMS:{
            return [...action.products.map(product => product.id)]
        }
        default:
            return state
    }
}

export default combineReducers({
    byId,
    visibleIds,
    setPagination
})

export const getProduct = (state: any, id: number) =>
    state.byId[id]

export const getVisibleProducts = (state: any) => {
    let allVisibleProducts = state.visibleIds.map((id: number) => getProduct(state, id) )
    allVisibleProducts.sort(
        ((a: any, b: any) => {
            if (a.title < b.title) {return -1}
            if (a.title > b.title) {return 1}
            return 0
        }))
    return allVisibleProducts
}

export const setProductsPagination = (state: any) => {
    return state.setPagination
}

