import {Link} from "react-router-dom";
import StldHeader, { StyledHeaderWrapper, HeaderLogoDiv, HeaderText, HeaderDescription } from "../styled/header/StldHeader";
import StldHeaderCartDiv, {StldHeaterCartWrapper} from "../styled/header/StldHeaderCartDiv";
import Search from "./Search";
import { setActiveCategory, setSelectedType } from "../../redux/slices/filterSlice";
import {useDispatch, useSelector} from "react-redux";

const Header = () => {

    const dispatch = useDispatch();
    const {order, price, total } = useSelector(store => store.cart);

    const onLogoClick = () => {
        dispatch(setActiveCategory(''));
        dispatch(setSelectedType('rating'));
    }

    return (
        <StldHeader>
            <StyledHeaderWrapper>
                <HeaderLogoDiv>
                    <Link to="/" style={{display: 'flex', justifyContent: 'center'}}
                          onClick={()=> onLogoClick()}
                    >
                        <img width="60" height="60" src="/images/fluffy-monsters-shop-logo.svg" alt="logo"/>
                    </Link>
                    <div>
                        <HeaderText>Fluffy monsters shop</HeaderText>
                        <HeaderDescription>cutest monsters for every taste</HeaderDescription>
                    </div>
                </HeaderLogoDiv>
                <Search />
                <StldHeaterCartWrapper>
                    <StldHeaderCartDiv>
                        <Link to="cart">
                            <span>{price} ₽</span>
                            <div className="button__delimiter">-</div>
                            <img src="/images/cart/cart-on-button.svg" alt="img"/>
                            <span>{total}</span>
                        </Link>
                    </StldHeaderCartDiv>
                </StldHeaterCartWrapper>
            </StyledHeaderWrapper>
        </StldHeader>
    );
};

export default Header;