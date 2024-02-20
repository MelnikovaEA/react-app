import React, {useState} from 'react';
import SearchInput, {SearchCloseIcon, SearchInputWrapper} from "../styled/header/StldSearch";

const Search = () => {
    const [inputData, setInputData] = useState('');

    return (
        <SearchInputWrapper>
            <SearchInput value={inputData}
                         onChange={(event)=>setInputData(event.target.value)}
                         placeholder='search ...'
            />
            {inputData && <SearchCloseIcon onClick={()=>setInputData('')}
                                           src="/images/close_icon.svg"
            />}
        </SearchInputWrapper>
    );
};

export default Search;