import React, { PureComponent } from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Home from "./home";
import Products from "./products";
import About from "./about";
import ComponentA from "./components/ComponentA";
import { UserContext, UserProvider } from "./components/userContext";
import ClassCounter from "./Hook/classCounter";
import HookCounter from "./Hook/hookCounter";
import DataFetching from "./Hook/DataFetching";
import ComponentC from "./components/ComponentC";

class App extends PureComponent {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Asosiy</Link>
                        </li>
                        <li>
                            <Link to="/products">Mahsulotlar</Link>
                        </li>
                        <li>
                            <Link to="/about">Biz haqimizda</Link>
                        </li>
                    </ul>
                    <Routes>
                        <Route
                            exact
                            path="/"
                            element={<Home />}
                            component={<Home />}
                        ></Route>
                        <Route
                            exact
                            path="/products"
                            element={<Products />}
                            component={<Products />}
                        ></Route>
                        <Route
                            exact
                            path="/about"
                            element={<About />}
                            component={<About />}
                        ></Route>
                    </Routes>
                </div>
                <div>
                    <UserProvider value="">
                        <ComponentA />
                    </UserProvider>
                </div>
                <div>
                    <ClassCounter />
                    <br />
                    <br />
                    <HookCounter />
                    <br />
                    <br />
                    <DataFetching />
                </div>
                <div>
                    <UserContext.Provider value={"Joha"}>
                        <ComponentC />
                    </UserContext.Provider>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
