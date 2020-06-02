import React from 'react'
import { connect } from 'react-redux'
import {filterByCategory} from '../../../redux/actions'
import {getFilteredCategories} from '../../../redux/catalogRducer'
import {getFilterId} from '../../../redux/combineReducers'
import {CatalogList} from './CatalogList'
import {ICategories} from "../../../interfaces";

type MapStateToPropsType = {
    categories: ICategories[]
    categoryId: number
}
type MapDispatchToPropsType = {
    filterByCategory(id:number): any
}

type CatalogContainerProps = MapStateToPropsType &  MapDispatchToPropsType

const CatalogContainer: React.FC<CatalogContainerProps> = ( { categories, categoryId, filterByCategory }) => {
    let filteredCategories = categories.filter((category: { parentId: number; }) =>
        category.parentId === categoryId)
    return (

        <CatalogList
            categories={ filteredCategories }
            filterByCategory={ filterByCategory }
        />
    )
}


const mapStateToProps = (state: any): MapStateToPropsType => ({
    categories: getFilteredCategories( state.categories ),
    categoryId:  getFilterId(state)
})

export default connect(
    mapStateToProps,
    { filterByCategory }
)(CatalogContainer)