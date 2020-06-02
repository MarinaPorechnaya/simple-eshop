import { combineReducers } from 'redux'
import cart, * as fromCart from './cartReducer'
import products, * as fromProducts from './productsReducer'
import categories, * as fromCategories from './catalogRducer'
//import filterId from './catalogRducer'

export default combineReducers({
    cart,
    products,
    categories
   // filterId
})

//type RootReducerType = typeof combineReducers
//export type AppStateType = ReturnType<RootReducerType>

const getAddedIds = (state: any) => fromCart.getAddedIds(state.cart)

const getQuantity = (state: any, id: number) => fromCart.getQuantity(state.cart, id)

const getProduct = (state: any, id: number) => fromProducts.getProduct(state.products, id)

const getVisibleProducts = (state: any) => fromProducts.getVisibleProducts(state)

const getFilterId = (state: any, key: number) => fromCategories.getFilterId(state, key)

//const getFilteredVisibleProducts = (state: any) => fromProducts.getVisibleProducts(state)

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

const getFilter = (state: any) => {
    //let filterId = []
    //filterId = getFilterId(state, 0)
    //state.filterId[0]
    return 1//filterId[0]
}

export const   getFilteredVisibleProducts = (state: any) => {
   // let filterId = getFilterId(state)
    let arrayToFilter = getVisibleProducts(state).filter((product: { categoryId: number[] }) =>
        //product.categoryId.some( val => val === 0))// state.filterId) )
        product.categoryId.some( val => val === getFilterId(state, 0) ) )
    return arrayToFilter
}


export const getTotalProductsCountInCategory = (state: any) => {
    // let filterId = getFilterId(state)
    let arrayToFilter = getVisibleProducts(state).filter((product: { categoryId: number[] }) =>
        //product.categoryId.some( val => val === 0))// state.filterId) )
        product.categoryId.some( val => val === getFilterId(state, 0) ) )
    return arrayToFilter.length
}
/*
export const getTotalProductsCountInCategory = (state: any) =>{
   //return getVisibleProducts(state).length
    return 5
    }*/

export const getCategoryId = (state: any) =>
   1
