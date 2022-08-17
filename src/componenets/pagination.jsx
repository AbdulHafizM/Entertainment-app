import './section.scss'

const Pagination = ({page, setPage, totalPages}) => {
    const prevButton = () => {
        if(page !== 1) {
            setPage(page = page - 1)
        }
    }
    const nextButton = () => {
        if(page < totalPages){
            setPage(page = page + 1)
        }
    }
    return(
        <div className="pagination">
            <button onClick={prevButton} className='prev'>prev</button>
            <span>{page} / {totalPages}</span>
            <button onClick={nextButton} className='next'>next</button>
        </div>
    )
}

export default Pagination