import React from 'react';
import CategoriesSortContainer from "../categories/CategoriesSortContainer";
import ItemsCardsContainer from "../itemsCards/ItemsCardsContainer";
import Pagination from "../pagination/Pagination";

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