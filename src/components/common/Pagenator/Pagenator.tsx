import classNames from "classnames";
import s from "./Pagenator.module.scss";

type PropsType = {
	currentPage: number
	totalCount: number
	pageSize: number
	onPageChanged: (pageNubmer: number) => void
}

let Pagenator: React.FC<PropsType> = ({currentPage, totalCount, pageSize, onPageChanged}) => {
	let totalPages = Math.round(totalCount / pageSize);
	let pages = [];
	let pagerItemCount = 8;
	let pagerHalfItemCount = Math.round(pagerItemCount / 2);
	let leftBorder = 2;
	let rightBorder = totalPages - 1;

	if(currentPage < 1 || currentPage > totalPages) {
		currentPage = 1;
	}

	pages.push(1);
	
	if(currentPage - pagerHalfItemCount > 1) {
		leftBorder = currentPage - pagerHalfItemCount;
	}

	if(currentPage + pagerHalfItemCount < totalPages) {
		rightBorder = currentPage + pagerHalfItemCount;
	}

	if (leftBorder > 2) {
		pages.push('...');
	}

	for(let i = leftBorder; i <= rightBorder; i++) {
		pages.push(i);
	}

	if (rightBorder < totalPages - 1) {
		pages.push('...');
	}

	pages.push(totalPages);

    return (
        <div className={s.pagenator}>
			{
				pages.map(page => (
					<div key={page} className={s.pagenator__item}>
						{typeof(page) == 'number' && <button className={classNames(s.pagenator__page, {'is-active': currentPage === page})} onClick={() => {onPageChanged(page)}}>{page}</button>}
						{typeof(page) == 'string' && <button className={classNames(s.pagenator__page, s.pagenator__page__dots)}>{page}</button>}
					</div>
				))
			}
        </div>
    )
}

export default Pagenator;