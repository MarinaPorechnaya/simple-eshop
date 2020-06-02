import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import HeaderContainer from "./components/Header/HeaderContainer";
import {Catalog} from "./components/Catalog/Catalog";
import CartContainer from "./components/Cart/CartContainer";
import CheckoutContainer from "./components/Checkout/CheckoutContainer";

function App() {
    return (
        <BrowserRouter>
            <div className="wrapper">
                <HeaderContainer/>
                <main className="page">
                    <div className="container">
                        <Switch>
                            <Route path={"/"} exact component={Catalog}/>
                            <Route path={"/cart"} component={CartContainer}/>
                            <Route path={"/checkout"} component={CheckoutContainer}/>
                        </Switch>
                    </div>
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;
