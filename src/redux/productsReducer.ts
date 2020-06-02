import { combineReducers } from 'redux'
import {FILTER_BY_CATEGORIES, ADD_TO_CART, RECEIVE_ITEMS, SET_CURRENT_PAGE, SET_CURRENT_ITEMS_COUNT_IN_CATEGORY} from './constants'
//import {AppStateType} from "./combineReducers";
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
type FilterByCategoryType = {
    type: typeof FILTER_BY_CATEGORIES
    categoryId: number
    totalItemsCount: number
}
type CurrentPageType = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}
type CurrentItemsCountType = {
    type: typeof SET_CURRENT_ITEMS_COUNT_IN_CATEGORY
    totalItemsCount: number
}

type ActionsType = HelpersType | ProductsType | FilterByCategoryType | CurrentPageType | CurrentItemsCountType

let initialState = {
   // pageNumber: 1,
    pageSize: 4,
    totalItemsCount: 19,
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
        case FILTER_BY_CATEGORIES:
          //  let arrProductsInCategory = getVisibleProducts(state.products)
          //  arrProductsInCategory = arrProductsInCategory.filter((product: { categoryId: number[] }) =>
         //   product.categoryId.some( val => val === action.categoryId ) )
            return {...state, totalItemsCount: 4//arrProductsInCategory.length//state.products lenth of smth with categoryId == action.currentPage // action.totalItemsCount
            }
        default:
            return state
    }
}
/*
const filterId = (state: any = 0, action: ActionsType) => {
    switch (action.type) {
        case FILTER_BY_CATEGORIES: {
            return action.categoryId
        }
        default:
            return state
    }
}*/
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
   // filterId,
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
export const getVisibleProductsOnPage = (state: any) => {

    let filteredVisibleProducts = getVisibleProducts(state)

    let end = state.setPagination.currentPage*state.setPagination.pageSize
    let start = end - state.setPagination.pageSize + 1

    return filteredVisibleProducts.filter((product: { id: number }) =>
        product.id >= start && product.id <= end)
}

export const setProductsPagination = (state: any) => {
    return state.setPagination
}

