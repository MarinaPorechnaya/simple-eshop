import {
    ADD_TO_CART,
    CHECKOUT_REQUEST,
    CHECKOUT_FAILURE,
    DELETE_PRODUCT,
    MINUS_PRODUCT
} from './constants'

const initialState = {
    addedIds: [],
    quantityById: {}
}

const addedIds = (state = initialState.addedIds, action: any) => {
    switch (action.type) {
        case ADD_TO_CART:
            // @ts-ignore
            if (state.indexOf(action.productId) !== -1) {
                return state
            }
            return [ ...state, action.productId ]
        case DELETE_PRODUCT:
            return [ ...state.filter(productId => productId !== action.productId ) ]
        default:
            return state
    }
}

const quantityById = (state = initialState.quantityById, action: any)=> {
    const { productId } = action
    switch (action.type) {
        case ADD_TO_CART:
            return { ...state,
                // @ts-ignore
                [productId]: (state[productId] || 0) + 1
            }
        case MINUS_PRODUCT:
            // @ts-ignore
            if ( state[productId] > 0 ) {
                return { ...state,
                    // @ts-ignore
                    [productId]: (state[productId] || 0) - 1
                }
            }
        default:
            return state
    }
}


export const getQuantity = (state: any, productId: number) =>
    state.quantityById[productId] || 0

export const getAddedIds = (state: any) => state.addedIds

const cart = (state = initialState, action: any) => {
    switch (action.type) {
        case CHECKOUT_REQUEST:
            return initialState
        case CHECKOUT_FAILURE:
            return action.cart
        default:
            return {
                addedIds: addedIds(state.addedIds, action),
                quantityById: quantityById(state.quantityById, action),
            }
    }
}

export default cart
