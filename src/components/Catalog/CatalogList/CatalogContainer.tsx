import React from 'react'
import { connect } from 'react-redux'
import {filterByCategory} from '../../../redux/actions'
import {getFilteredCategories} from '../../../redux/catalogRducer'
import {getCategoryId} from '../../../redux/combineReducers'
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

const CatalogContainer: React.FC<CatalogContainerProps> = ( { categories, filterByCategory }) => (
    <CatalogList
        categories={ categories }
        filterByCategory={ filterByCategory }
        //parentId={parentId}
    />
)

const mapStateToProps = (state: any): MapStateToPropsType => ({
    categories: getFilteredCategories( state.categories ),
    categoryId: getCategoryId ( state.categoryId )
})

export default connect(
    mapStateToProps,
    { filterByCategory }
)(CatalogContainer)