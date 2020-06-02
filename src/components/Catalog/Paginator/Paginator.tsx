import React from 'react'
import s from './Paginator.module.css'

type Props = {
    totalItemsCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (currentPage: number) => void
}

export const Paginator: React.FC<Props> = (props) => {
    let pagesCount = Math.ceil(props.totalItemsCount /props.pageSize);
    let pages = [];
    for(let i = 1; i <= pagesCount; i++){
        pages.push(i);
    }
    const onPageChanged: any = (pageNumber: number) => {
        props.onPageChanged(pageNumber)
    }
    return <div  className="paginator">
        {pages.map( p => {
            return <span onClick={(e)=>{onPageChanged(p)}}
                         className={props.currentPage === p ? s.selectedPage : ""}>{p}</span>
        })}
    </div>

}