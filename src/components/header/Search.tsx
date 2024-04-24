import React, {useRef, useEffect, ChangeEvent} from "react";
import {useAppDispatch, useAppSelector} from "../../hooks.ts";
import {setCurPageNum, setInputData, setLocalInputData} from "../../redux/slices/filterSlice";
import SearchInput, {SearchCloseIcon, SearchInputWrapper} from "../styled/header/SearchContainer";
import useDebounce from "../../utils/hooks/useDebounce";

const Search: React.FC = () => {

    const dispatch = useAppDispatch();
    const inputRef = useRef<HTMLInputElement>(null);

    const localInputData = useAppSelector(store => store.filter.localInputData);
    const debouncedInputData = useDebounce(localInputData, 500);

    useEffect(() => {
      dispatch(setInputData(debouncedInputData));
      dispatch(setCurPageNum(1));
    }, [debouncedInputData]);

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      dispatch(setLocalInputData(e.target.value));
    };

    const onCloseIconClick = () => {
      dispatch(setLocalInputData(""));
      if(inputRef.current) {
          inputRef.current.focus();
      }
    };

    return (
      <SearchInputWrapper id="search-input">
        <SearchInput
          type="text"
          ref={inputRef}
          value={localInputData}
          onChange={(event) => onInputChange(event)}
          placeholder="search ..."
        />
        {debouncedInputData && (
          <SearchCloseIcon
            onClick={onCloseIconClick}
            src="/images/close_icon.svg"
          />
        )}
      </SearchInputWrapper>
    );
}

export default Search;