import SearchInput, {SearchCloseIcon, SearchInputWrapper} from "../styled/header/StldSearch";

const Search = ({inputData, setInputData, setCurPageNum}) => {

    return (
        <SearchInputWrapper>
            <SearchInput value={inputData}
                         onChange={(event)=>{
                             setCurPageNum(1);
                             setInputData(event.target.value);}
            }
                         placeholder='search ...'
            />
            {inputData && <SearchCloseIcon onClick={()=>setInputData('')}
                                           src="/images/close_icon.svg"
            />}
        </SearchInputWrapper>
    );
};

export default Search;