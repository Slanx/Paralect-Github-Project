import { useState } from 'react';
import { ReactComponent as Arrow } from '../../resources/icon/arrow.svg';
import './paginate.scss';

import ReactPaginate from 'react-paginate';

const Paginate = (props) => {
  const { reposAmount, updatePage } = props;
  const [page, setPage] = useState(1);

  const onPageChange = (data) => {
    setPage(data.selected + 1);
    updatePage(data.selected + 1);
  };

  const firstItem = page * 4 - 3;
  let lastItem = page * 4;
  let strItems = '';

  if (reposAmount === 1) {
    strItems = '1 of 1 item';
  } else if (reposAmount < 5) {
    strItems = `${firstItem} - ${reposAmount} of ${reposAmount} items`;
  } else {
    if (lastItem > reposAmount) {
      lastItem = reposAmount;
    }
    strItems = `${firstItem} - ${lastItem} of ${reposAmount} items`;
  }

  return (
    <div className="pagination">
      <div className="pagination__amount">{strItems}</div>
      <ReactPaginate
        previousLabel={<Arrow className="arrow " />}
        nextLabel={<Arrow className="arrow arrow_right"></Arrow>}
        breakLabel={'...'}
        breakClassName={'pages__break'}
        previousClassName={'pages__arrow'}
        nextClassName={'pages__arrow'}
        containerClassName={'pagination__pages pages'}
        pageCount={Math.ceil(reposAmount / 4)}
        pageClassName={'pages__button'}
        activeClassName={'active'}
        marginPagesDisplayed={1}
        pageRangeDisplayed={3}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default Paginate;
