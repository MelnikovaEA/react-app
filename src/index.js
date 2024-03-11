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

