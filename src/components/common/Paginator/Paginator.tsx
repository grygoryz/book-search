import React, {useState} from "react";
import c from "./Paginator.module.scss";
import cn from "classnames"

type Props = {
    totalItemsCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    portionSize?: number
}

const Paginator: React.FC<Props> = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 20}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionsCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    const isPageNumberInRange = (p: number) => p >= leftPortionPageNumber && p <= rightPortionPageNumber;
    const isFirstPortionNumber = () => portionNumber <= 1;
    const isLastPortionNumber = () => portionNumber >= portionsCount;

    return (
        <div className={c.pagination}>
            <button className={cn(c.button, c.prevButton)}
                    onClick={() => setPortionNumber(portionNumber - 1)}
                    disabled={isFirstPortionNumber()}><span/></button>
            <div className={c.numbersList}>
                {pages
                    .filter((p) => isPageNumberInRange(p))
                    .map(page => {
                        return <span key={page}
                                     className={cn(c.page, {[c.currentPage]: page === currentPage})}
                                     onClick={() => onPageChanged(page)}
                        >{page}</span>
                    })}</div>
            <button className={cn(c.button, c.nextButton)}
                    onClick={() => setPortionNumber(portionNumber + 1)}
                    disabled={isLastPortionNumber()}><span/></button>
        </div>)

};

export default Paginator;