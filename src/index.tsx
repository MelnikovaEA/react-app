import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import store from "./redux/store";
import {Provider} from "react-redux";
import './index.css';
import App from './App';
import GlobalStyles from "./components/styled/GlobalStyles";
import ErrorRoutePage from "./components/errors/ErrorRoutePage";
import Cart from "./components/cart/Cart";
import EmptyCart from "./components/cart/EmptyCart";
import NotFoundPage from "./components/errors/NotFoundPage";
import AppBody from "./components/body/AppBody";
import SingleItemPage from "./components/itemsCards/SingleItemPage";
import ErrorAppPage from "./components/errors/ErrorAppPage";
import Error404Page from "./components/errors/Error404Page";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorRoutePage/>,
        children: [
            {
                path: "/",
                element: <AppBody/>,
            },
            {
                path: "/:id",
                element: <SingleItemPage/>,
            },
            {
                path: "cart",
                element: <Cart/>,
            },
            {
                path: "empty-cart",
                element: <EmptyCart/>
            },
            {
                path: "*",
                element: <NotFoundPage/>,
            },
        ]
    },
    {
        path: "error",
        element: <ErrorAppPage/>
    },
    {
        path: "error404",
        element: <Error404Page/>
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <GlobalStyles/>
            <RouterProvider router={router}/>
        </Provider>
    </React.StrictMode>
);

