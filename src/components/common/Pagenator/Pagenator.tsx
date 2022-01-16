type PropsType = {
	currentPage: number
	totalCount: number
	pageSize: number
	onPageChanged: (pageNubmer: number) => void
}

let Pagenator: React.FC<PropsType> = ({currentPage, totalCount, pageSize, onPageChanged}) => {
    let pagesCount = Math.ceil(totalCount / pageSize);
	let pages: Array<number> = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}

    return (
        <div className="users">
			{
				pages.map(page => 
					<span key={page} className={currentPage === page ? 'is-active' : ''} onClick={(e) => {onPageChanged(page)}}>{page}</span>
				)
			}
        </div>
    )
}

export default Pagenator;