import React from "react";
import { useAppDispatch, useAppSelector} from "../../hooks.ts";
import {
    selectFilter,
    setActiveCategory,
    setCurPageNum,
    setInputData,
    setLocalInputData
} from "../../redux/slices/filterSlice";
import CategoriesUl, {CategoriesLi} from "../styled/categories/CategoriesContainer";

type Categories = {category: string, text: string}[];

const categories: Categories = [
    {category: '', text: 'Все'}, {category: 'Огнедышащие', text: 'Огнедышащие'},
    {category: 'Зеленые', text: 'Зеленые'}, {category: `С рожками`, text: `С\xa0рожками`},
    {category: `Хитрые`, text: `Хитрые`}, {category: `В горошек`, text: `В\xa0горошек`},
]

const Categories: React.FC = () => {

    const dispatch = useAppDispatch();

    const activeCategory = useAppSelector(selectFilter).activeCategory;
    const onCategoryClick = (value: string) => {
        dispatch(setActiveCategory(value));
        dispatch(setCurPageNum(1));
        dispatch(setInputData(''));
        dispatch(setLocalInputData(''));
    }

    return (
        <CategoriesUl>
            {categories.map((obj, index) => (
                <CategoriesLi key={index + 1}
                              onClick={() => onCategoryClick(obj.category)}
                              className={activeCategory === obj.category ? 'active' : undefined}
                >{obj.text}</CategoriesLi>)
            )}
        </CategoriesUl>
    );
}
export default Categories;