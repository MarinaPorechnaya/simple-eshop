import { combineReducers } from 'redux'
import {RECEIVE_CATEGORIES, FILTER_BY_CATEGORIES} from './constants'
import {ICategories} from "../interfaces";

type CategoriesType = {
    type: typeof RECEIVE_CATEGORIES
    parentId: number
    categories: ICategories[]
}
type FilterType = {
    type: typeof FILTER_BY_CATEGORIES
    categoryId: number
    totalItemsCount: number
}

type CatalogReducerActionsType = CategoriesType & FilterType

const filterId = (state: any = 0, action: CatalogReducerActionsType) => {
    switch (action.type) {
        case FILTER_BY_CATEGORIES: {
            return action.categoryId
        }
        default:
            return state
    }
}
const byCatId = (state: any = {}, action: CatalogReducerActionsType) => {
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

const visibleCatIds = (state = [], action: CatalogReducerActionsType) => {
    switch (action.type) {
        case RECEIVE_CATEGORIES:
            return action.categories.map(category => category.id)
        default:
            return state
    }
}

export default combineReducers({
    byCatId,
    visibleCatIds,
    filterId
})

export const getCategory = (state: any, id: number) =>
    state.byCatId[id]

export const getFilterId = (state: any, key: any) =>
  1// state.filterId[key]

export const getFilteredCategories = (state: any) => {
    let allVisibleCategories = state.visibleCatIds.map((id: number) => getCategory(state, id) )
    return allVisibleCategories.filter((category: { parentId: number; }) =>
        category.parentId === state.filterId)//getFilterId(state, 0))
}