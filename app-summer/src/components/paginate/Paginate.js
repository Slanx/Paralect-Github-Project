import { ReactComponent as Arrow } from '../../resources/icon/arrow.svg';
import './paginate.scss';

import ReactPaginate from 'react-paginate';

const Paginate = (props) => {
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
  );
};

export default Paginate;
