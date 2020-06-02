import React from 'react'
import { connect } from 'react-redux'
import { addToCart, onPageChanged } from '../../../redux/actions'
import {getVisibleProducts, setProductsPagination} from '../../../redux/productsReducer'
import ProductCatalogItem from './ProductCatalogItem'
import ItemsList from './ItemsList'
import {IProducts} from "../../../interfaces";
import {Paginator} from "../Paginator/Paginator";
import {getFilterId} from "../../../redux/combineReducers";

type MapStateToPropsType = {
    products: IProducts[]
    filterId: number
    pagination: any
}
type MapDispatchToPropsType = {
    addToCart(id:number): void
    onPageChanged(currentPage: number): void
}

type ProductsContainerProps = MapStateToPropsType &  MapDispatchToPropsType

const ProductsContainer: React.FC<ProductsContainerProps> = ( { products, filterId, pagination, addToCart, onPageChanged}) => {
    let filteredByCategoryProducts = products.filter((product: { categoryId: number[] }) =>
        product.categoryId.some( val => val === filterId) )

    let totalProductsInCategory = filteredByCategoryProducts.length

    let end = pagination.currentPage*pagination.pageSize
    let start = end - pagination.pageSize + 1

    filteredByCategoryProducts = filteredByCategoryProducts.filter((product: { id: number }) =>
        product.id >= start && product.id <= end)
    return (
   <>
       <ItemsList>
        {filteredByCategoryProducts.map((product: any) =>
            <ProductCatalogItem
                key={product.id}
                product={product}
                onAddToCartClicked={() => addToCart(product.id)} />
        )}
        </ItemsList>
        <Paginator currentPage={pagination.currentPage}  onPageChanged={onPageChanged}
                    totalItemsCount={totalProductsInCategory} pageSize={pagination.pageSize}/>
    </>
)}


const mapStateToProps = (state: any): MapStateToPropsType => ({
    products: getVisibleProducts(state.products),
    pagination: setProductsPagination(state.products),
    filterId: getFilterId(state),
})

export default connect(
    mapStateToProps,
    { addToCart, onPageChanged }
)(ProductsContainer)
