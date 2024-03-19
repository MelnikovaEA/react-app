import {useRef, useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import {setCurPageNum, setInputData, setLocalInputData} from "../../redux/slices/filterSlice";
import SearchInput, {SearchCloseIcon, SearchInputWrapper} from "../styled/header/SearchContainer";
import useDebounce from "../../utils/hooks/useDebounce";

const Search = () => {

    const dispatch = useDispatch();
    const inputRef = useRef(null);

    const localInputData = useSelector(store => store.filter.localInputData);
    const debouncedInputData = useDebounce(localInputData, 500);

    useEffect(() => {
        dispatch(setInputData(debouncedInputData));
        dispatch(setCurPageNum(1));
    }, [debouncedInputData]);

    const onInputChange = (e) => {
        dispatch(setLocalInputData(e.target.value));
    }

    const onCloseIconClick = () => {
        dispatch(setLocalInputData(''));
        inputRef.current.focus();
    }

    return (
        <SearchInputWrapper>
            <SearchInput type="text"
                         ref={inputRef}
                         value={localInputData}
                         onChange={(event) => onInputChange(event)}
                         placeholder='search ...'/>
            {debouncedInputData && <SearchCloseIcon onClick={onCloseIconClick}
                                                    src="/images/close_icon.svg"/>}
        </SearchInputWrapper>
    );
}

export default Search;