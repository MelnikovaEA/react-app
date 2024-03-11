import React, { useMemo } from "react";
import {Link, useLocation } from "react-router-dom";
import StldHeader, { StyledHeaderWrapper, HeaderLogoDiv, HeaderText, HeaderDescription } from "../styled/header/StldHeader";
import StldHeaderCartDiv, {StldHeaterCartWrapper} from "../styled/header/StldHeaderCartDiv";
import Search from "./Search";
import { setActiveCategory, setSelectedType } from "../../redux/slices/filterSlice";
import {useDispatch, useSelector} from "react-redux";
import {selectCart} from "../../redux/slices/cartSlice";

const Header = () => {

    const dispatch = useDispatch();
    const { price, total } = useSelector(selectCart);

    const location = useLocation();
    const isCartPage = useMemo(() => location.pathname === '/cart', [location]);

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
                { !isCartPage && <Search/>}
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

export default React.memo(Header);