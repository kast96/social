let Pagenator = ({currentPage, totalCount, pageSize, onPageChanged}) => {
    let pagesCount = Math.ceil(totalCount / pageSize);
	let pages = [];
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