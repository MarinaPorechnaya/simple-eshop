import React from 'react'
import s from './ItemsList.module.scss';

interface ProductsListProps {
    children: React.ReactNode
}

const ItemsList: React.FC<ProductsListProps> = ({children}) => {
    return (
        <div className={s.product}>{children}</div>
    )
}

export default ItemsList
