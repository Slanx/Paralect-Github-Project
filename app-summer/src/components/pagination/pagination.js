import { ReactComponent as Arrow } from '../../resources/icon/arrow.svg';
import './pagination.scss';

import ReactPaginate from 'react-paginate';

const Pagination = (props) => {
  const { pages, updatePage } = props;

  const onPageChange = (data) => {
    updatePage(data.selected + 1);
  };

  return (
    <ReactPaginate
      previousLabel={<Arrow className="arrow " />}
      nextLabel={<Arrow className="arrow arrow_right"></Arrow>}
      breakLabel={'...'}
      breakClassName={'pagination__break'}
      previousClassName={'pagination__arrow'}
      nextClassName={'pagination__arrow'}
      containerClassName={'pagination'}
      pageCount={Math.ceil(pages / 4)}
      pageClassName={'pagination__button'}
      activeClassName={'active'}
      marginPagesDisplayed={1}
      pageRangeDisplayed={3}
      onPageChange={onPageChange}
    />
    // {/* <div className="pagination__amount"> 5-8 of 249 items</div>
    // <div className="pagination__pages">
    //   <button className="pagination__arrow ">
    //     <Arrow className="arrow " />
    //   </button>
    //   <button className="pagination__button">1</button>
    //   <button className="pagination__button active">2</button>
    //   <button className="pagination__button">3</button>
    //   <button className="pagination__button">...</button>
    //   <button className="pagination__button">{pages / 4}</button>
    //   <button className="pagination__arrow">
    //     <Arrow className="arrow arrow_right"></Arrow>
    //   </button>
    // </div> */}
  );
};

export default Pagination;
