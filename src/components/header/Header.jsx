import {Link, useLocation } from "react-router-dom";
import StldHeader, { StyledHeaderWrapper, HeaderLogoDiv, HeaderText, HeaderDescription } from "../styled/header/StldHeader";
import StldHeaderCartDiv, {StldHeaterCartWrapper} from "../styled/header/StldHeaderCartDiv";
import Search from "./Search";
import { setActiveCategory, setSelectedType } from "../../redux/slices/filterSlice";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";

const Header = () => {

    const dispatch = useDispatch();
    const { price, total } = useSelector(store => store.cart);

    const location = useLocation();
    const [isCartPage, setIsCartPage] = useState('');

    useEffect(()=>{
        setIsCartPage(location.pathname);
    }, [location]);

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
                { isCartPage !== '/cart' && <Search/>}
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