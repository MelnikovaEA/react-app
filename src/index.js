import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import App from './App';
import GlobalStyles from "./components/styled/GlobalStyles";
import ErrorPage from "./components/ErrorPage";
import MonstersCardsContainer from "./components/monstersCards/MonstersCardsContainer";
import Cart from "./components/cart/Cart";
import EmptyCart from "./components/cart/EmptyCart";
import NotFoundPage from "./components/NotFoundPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <MonstersCardsContainer />,
            },
            {
                path: "cart",
                element: <Cart />,
            },
            {
                path: "empty-cart",
                element: <EmptyCart />
            },
            {
                path: "*",
                element: <NotFoundPage />,
            },
        ]
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <GlobalStyles />
        <RouterProvider router={router} />
    </React.StrictMode>
);

