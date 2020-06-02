import React from 'react'
import { connect } from 'react-redux'
import { addToCart, onPageChanged } from '../../../redux/actions'
import {getVisibleProductsOnPage, setProductsPagination} from '../../../redux/productsReducer'
import ProductCatalogItem from './ProductCatalogItem'
import ItemsList from './ItemsList'
import {IProducts} from "../../../interfaces";
import {Paginator} from "../Paginator/Paginator";
import {getFilteredVisibleProducts, getTotalProductsCountInCategory} from "../../../redux/combineReducers";
//import {AppStateType} from "../../../redux/combineReducers";

type MapStateToPropsType = {
    products: IProducts[]
  //  pageNumber: number
    pageSize: number
    totalItemsCount: number
    currentPage: number
    pagination: any
}
type MapDispatchToPropsType = {
    addToCart(id:number): void
    onPageChanged(currentPage: number): void
}

type ProductsContainerProps = MapStateToPropsType &  MapDispatchToPropsType

const ProductsContainer: React.FC<ProductsContainerProps> = ( { products,pagination, addToCart, currentPage, totalItemsCount, pageSize, onPageChanged}) => {
    return (
   <>
       <ItemsList>
        {products.map((product: any) =>
            <ProductCatalogItem
                key={product.id}
                product={product}
                onAddToCartClicked={() => addToCart(product.id)} />
        )}
        </ItemsList>

        <Paginator currentPage={pagination.currentPage}  onPageChanged={onPageChanged}
                    totalItemsCount={pagination.totalItemsCount} pageSize={pagination.pageSize}/>
    </>
)}


const mapStateToProps = (state: any): MapStateToPropsType => ({
   // products: getVisibleProductsOnPage(state.products),
    products: getFilteredVisibleProducts (state.products),
    pagination: setProductsPagination(state.products),
    //pageNumber: 1,
    pageSize: state.products.pageSize,
    totalItemsCount: getTotalProductsCountInCategory(state.products),
    currentPage: 1
})

export default connect(
    mapStateToProps,
    { addToCart, onPageChanged }
)(ProductsContainer)
