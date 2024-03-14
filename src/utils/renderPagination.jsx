export const renderPagination = (pages, dispatch, curPageNum, setCurPageNum) => {
    const elements = [];
    for (let i = 1; i <= pages; i++) {
        elements.push(<li
            key={i}
            onClick={() => {
                dispatch(setCurPageNum(i))
            }
            }
            className={curPageNum === i ? 'active' : null}>{i}</li>);
    }
    return elements;
}