import CategoriesUl, {CategoriesLi} from "../styled/categories/StldCategories";
import {useSelector, useDispatch} from "react-redux";
import {setActiveCategory, setCurPageNum, setInputData, setLocalInputData } from "../../redux/slices/filterSlice";

const categories = [
    {category: '', text: 'Все'}, {category: 'Огнедышащие', text: 'Огнедышащие'},
    {category: 'Зеленые', text: 'Зеленые'}, {category: `С рожками`, text: `С\xa0рожками`},
    {category: `Хитрые`, text: `Хитрые`}, {category: `В горошек`, text: `В\xa0горошек`},
]

const Categories = () => {

    const dispatch = useDispatch();

    const activeCategory = useSelector((store) => store.filter.activeCategory);

    const onCategoryClick = (value) => {
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
                              className={activeCategory === obj.category && 'active'}
                >{obj.text}</CategoriesLi>)
            )}
        </CategoriesUl>
    );
};

export default Categories;