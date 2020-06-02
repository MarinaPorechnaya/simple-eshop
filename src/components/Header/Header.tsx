import React from 'react'
import {NavLink} from "react-router-dom";
import s from './Header.module.scss'
import {IProducts} from "../../interfaces";

type HeaderProps = {
    total: number
    cnt: number
}

export const Header: React.FC<HeaderProps> = ({total, cnt}) =>{
    return (
        <header className={s.header}>
            <div className="container">
                <div className={s.header__raw}>
                    <NavLink className={s.header__a} id={"2"} to={"/"}><h2>Siberian Cosmetics</h2></NavLink>
                    <div className={s.header__cart_block}>
                        <div className={s.header__cost}>Сумма: {total} руб.</div>
                        <div className={s.header__cart}>
                            <NavLink id={"1"} to={"/cart"}>Корзина</NavLink>
                        </div>
                        <div className={s.header__cnt}>{cnt}</div>
                    </div>
                </div>
            </div>
        </header>
    )
}