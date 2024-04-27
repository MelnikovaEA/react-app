import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import store, {persistor} from "./redux/store";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import './index.css';
import App from './App';
import GlobalStyles from "./components/styled/GlobalStyles";
import ErrorRoutePage from "./components/errors/ErrorRoutePage";
import {CartLazy} from "./components/lazyComponents.tsx";
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
                element: <Suspense fallback={<div>'Загрузка...'</div>}>
                    <CartLazy/>
                </Suspense>
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

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <GlobalStyles/>
                <RouterProvider router={router}/>
            </PersistGate>
        </Provider>
    </React.StrictMode>
);

