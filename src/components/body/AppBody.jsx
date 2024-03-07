import React from 'react';
import CategoriesSortContainer from "../categories/CategoriesSortContainer";
import Pagination from "../pagination/Pagination";
import ItemsCardsContainer from "../itemsCards/ItemsCardsContainer";

const AppBody = () => {
    return (
        <>
            <CategoriesSortContainer/>
            <ItemsCardsContainer/>
            <Pagination/>
        </>
    );
};

export default AppBody;