import React from 'react'
import { connect } from 'react-redux'
import {getTotal, getCnt} from '../../redux/combineReducers'

import {Header} from "./Header";

type ProductProps = {
    total: number, cnt: number
}

const HeaderContainer: React.FC<ProductProps> = ({ total, cnt }) => (
    <Header
        total={total}
        cnt={cnt}/>
)

const mapStateToProps = (state: any) => ({
    total: getTotal(state),
    cnt: getCnt(state)
})

export default connect(
    mapStateToProps,
    {}
)(HeaderContainer)
