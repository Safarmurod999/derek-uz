import ReactPaginate from "react-paginate";

const Pagination = ({ itemsPerPage, totalItems, offset, setOffset }) => {


    const endOffset = offset + itemsPerPage;
    const pageCount = Math.ceil(totalItems / itemsPerPage);

    const pageNumbers = [];

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % totalItems;
        setOffset(newOffset);
    };

    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <div className='pagination'>
            <ReactPaginate
                className="pagination-wrapper"
                breakLabel="..."
                nextLabel="Next"
                onPageChange={handlePageClick}
                pageRangeDisplayed={1}
                pageCount={pageCount}
                marginPagesDisplayed={1}
                previousLabel="Prev"
                renderOnZeroPageCount={null}
            />
        </div>
    )
}

export default Pagination