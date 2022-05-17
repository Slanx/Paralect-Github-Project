import { ReactComponent as Arrow } from '../../resources/icon/arrow.svg';
import './pagination.scss';

const Pagination = (props) => {
  const { pages } = props;
  return (
    <div className="pagination">
      <div className="pagination__amount"> 5-8 of 249 items</div>
      <div className="pagination__pages">
        <button className="pagination__arrow ">
          <Arrow className="arrow " />
        </button>
        <button className="pagination__button">1</button>
        <button className="pagination__button active">2</button>
        <button className="pagination__button">3</button>
        <button className="pagination__button">...</button>
        <button className="pagination__button">{pages / 4}</button>
        <button className="pagination__arrow">
          <Arrow className="arrow arrow_right"></Arrow>
        </button>
      </div>
    </div>
  );
};

export default Pagination;
