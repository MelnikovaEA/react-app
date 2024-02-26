import SearchInput, {SearchCloseIcon, SearchInputWrapper} from "../styled/header/StldSearch";
import {useRef, useEffect, useContext} from "react";
import useDebounce from "../../utils/hooks/useDebounce";
import {LocalInputDataContext} from "../../App";

const Search = ({inputData, setInputData, setCurPageNum}) => {
    console.log('Search input value', inputData);

    const {localInputData, setLocalInputData} = useContext(LocalInputDataContext);
    const debouncedInputData = useDebounce(localInputData, 500);

    useEffect(() => {
        setInputData(debouncedInputData); // Обновляем inputData через пропс
        setCurPageNum(1);
    }, [debouncedInputData, setInputData, setCurPageNum])

    const inputRef = useRef(null);

    const onInputChange = (e) => {
        setLocalInputData(e.target.value);
    }

    const onCloseIconClick = () => {
        setLocalInputData('');
        inputRef.current.focus();
    }

    return (
        <SearchInputWrapper>
            <SearchInput type="text"
                         ref={inputRef}
                         value={localInputData}
                         onChange={(event) => onInputChange(event)}
                         placeholder='search ...'/>
            {debouncedInputData && <SearchCloseIcon onClick={ onCloseIconClick }
                                           src="/images/close_icon.svg"/>}
        </SearchInputWrapper>
    );
};

export default Search;