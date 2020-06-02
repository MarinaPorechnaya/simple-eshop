import React from 'react';
import CatalogContainer from "./CatalogList/CatalogContainer";
import ProductsContainer from "./ItemsList/ProductsContainer";

export const Catalog: React.FC = () => {
    return(
        <>
            <CatalogContainer />
            <ProductsContainer />

        </>
    )
}