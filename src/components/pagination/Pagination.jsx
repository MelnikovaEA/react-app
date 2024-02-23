import StldPagination from "../styled/pagination/StldPagination";

const Pagination = ({pagesQty, curPageNum, setCurPageNum}) => {

    console.log(pagesQty, curPageNum)

    const renderScale = (pages) => {
        const elements = [];
        for (let i = 1; i <= pages; i++) {
            elements.push(<li
                key={i}
                onClick={() => {
                    setCurPageNum(i);
                }
            }
                className={curPageNum === i ? 'active' : null}>{i}</li>);
        }
        return elements;
    }

    return (
        <StldPagination>
            <span onClick={() => setCurPageNum(curPageNum && curPageNum - 1)}>&larr;</span>
            <ul>
                {renderScale(pagesQty)}
            </ul>
            <span onClick={() => setCurPageNum(curPageNum<pagesQty ? curPageNum + 1 : curPageNum)}>&rarr;</span>
        </StldPagination>
    );
};

export default Pagination;