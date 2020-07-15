import React, {useState} from "react";
import classes from "./Paginator.module.scss";
import cn from "classnames"

const Paginator= ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 20}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionsCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    const isPageNumberInRange = (p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber;
    const isFirstPortionNumber = () => portionNumber <= 1;
    const isLastPortionNumber = () => portionNumber >= portionsCount;

    return (
        <div className={classes.pagination}>
            <button onClick={() => setPortionNumber(portionNumber - 1)} disabled={isFirstPortionNumber()}>Prev</button>
            {pages
                .filter((p) => isPageNumberInRange(p))
                .map(page => {
                return <span key={page}
                             className={cn(classes.page, {
                                 [classes.currentPage]: page === currentPage
                             })}
                             onClick={() => onPageChanged(page)}
                >{page}</span>
            })}
            <button onClick={() => setPortionNumber(portionNumber + 1)} disabled={isLastPortionNumber()}>Next</button>
        </div>)

};

export default Paginator;