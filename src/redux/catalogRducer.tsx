import { combineReducers } from 'redux'
import {RECEIVE_CATEGORIES, FILTER_BY_CATEGORIES} from './constants'
import {ICategories} from "../interfaces";

type CategoriesType = {
    type: typeof RECEIVE_CATEGORIES
    parentId: number
    categories: ICategories[]
}

const byCatId = (state: any = {}, action: CategoriesType) => {
    switch (action.type) {
        case RECEIVE_CATEGORIES:
            return {
                ...state,
                ...action.categories.reduce((obj: any, category: any) => {
                    obj[category.id] = category
                    return obj
                }, {})
            }
        default:
            return state
    }
}

const visibleCatIds = (state = [], action: CategoriesType) => {
    switch (action.type) {
        case RECEIVE_CATEGORIES:
            return action.categories.map(category => category.id)
        default:
            return state
    }
}

export default combineReducers({
    byCatId,
    visibleCatIds
})

export const getCategory = (state: any, id: number) =>
    state.byCatId[id]

export const getFilteredCategories = (state: any) =>
    state.visibleCatIds.map((id: number) => getCategory(state, id) )