import {darken} from "polished";
import styled from "styled-components";
import {useSelector, useDispatch} from "react-redux";
import {setActiveCategory} from "../../redux/slices/categorySlice";
import { setCurPageNum } from "../../redux/slices/mainSlice";
import { setInputData, setLocalInputData } from "../../redux/slices/searchSlice";

const categories = [
    {category: '', text: 'Все'}, {category: 'Огнедышащие', text: 'Огнедышащие'},
    {category: 'Зеленые', text: 'Зеленые'}, {category: `С рожками`, text: `С\xa0рожками`},
    {category: `Хитрые`, text: `Хитрые`}, {category: `В горошек`, text: `В\xa0горошек`},
]

const CategoriesUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
`

const CategoriesLi = styled.li`
  background-color: #f9f9f9;
  padding: 13px 30px;
  border-radius: 30px;
  margin: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.1s ease-in-out;
  list-style-type: none;
  height: fit-content;

  &.active {
    background-color: ${darken(0.5, '#f9f9f9')}
  }

  &:hover {
    background-color: ${darken(0.2, '#f9f9f9')};
  }
`

const Categories = () => {

    const dispatch = useDispatch();

    const activeCategory = useSelector((store) => store.category.activeCategory);

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