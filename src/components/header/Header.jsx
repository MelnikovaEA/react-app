import React, {useMemo} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link, useLocation} from "react-router-dom";
import {selectCart} from "../../redux/slices/cartSlice";
import {setActiveCategory, setSelectedType} from "../../redux/slices/filterSlice";
import StldHeader, {
    StyledHeaderWrapper,
    HeaderLogoDiv,
    HeaderText,
    HeaderDescription, HeaderInfoWrapper
} from "../styled/header/StldHeader";
import StldHeaderCartDiv, {StldHeaderCartWrapper} from "../styled/header/StldHeaderCartDiv";
import Search from "./Search";

const Header = () => {

    const dispatch = useDispatch();
    const {price, total} = useSelector(selectCart);

    const location = useLocation();
    const isMainPage = useMemo(() => location.pathname === '/', [location]);
    const isCartPage = useMemo(() => location.pathname === '/cart', [location]);

    const onLogoClick = () => {
        dispatch(setActiveCategory(''));
        dispatch(setSelectedType('rating'));
    }

    return (
        <StldHeader>
            <StyledHeaderWrapper>
                <HeaderLogoDiv id='header-logo'>
                    <Link to="/" style={{display: 'flex', justifyContent: 'center'}}
                          onClick={() => onLogoClick()}
                    >
                        <img width="60" height="60" src="/images/fluffy-monsters-shop-logo.svg" alt="logo"/>
                    </Link>
                    <HeaderInfoWrapper>
                        <HeaderText>Fluffy monsters shop</HeaderText>
                        <HeaderDescription>cutest monsters for every taste</HeaderDescription>
                    </HeaderInfoWrapper>
                </HeaderLogoDiv>
                {isMainPage && <Search id='search-input'/>}
                {!isCartPage && <StldHeaderCartWrapper id='cart-item'>
                    <StldHeaderCartDiv>
                        <Link to="cart">
                            <span>{price} ₽</span>
                            <div>-</div>
                            <img src="/images/cart/cart-on-button.svg" alt="img"/>
                            <span>{total}</span>
                        </Link>
                    </StldHeaderCartDiv>
                </StldHeaderCartWrapper>}
            </StyledHeaderWrapper>
        </StldHeader>
    );
}

export default React.memo(Header);